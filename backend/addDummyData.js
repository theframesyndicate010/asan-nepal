const pool = require('./src/db/pool')

const dummyProducts = [
  {
    name: 'ASAN Cyclone Pro Pedestal Fan',
    category: 'Fans',
    spec: 'Bring the breeze exactly where you want it with the ASAN Cyclone Pro Pedestal Fan featuring a heavy-duty 100% copper motor delivering a high-velocity air throw that cuts through the summer heat. Features 90-degree oscillation with adjustable height pole, sturdy anti-wobble base with safety grid protecting fingers and optimal air circulation throughout spaces.',
    price: '4999.99',
    image: '/assets/electronics/fan1.jpg',
  },
  {
    name: 'ASAN Air Cooler Supreme',
    category: 'Coolers',
    spec: 'Experience ultimate cooling comfort with the ASAN Air Cooler Supreme featuring advanced evaporative cooling technology and powerful water circulation system. Equipped with digital temperature control, multiple fan speed settings, removable water tank for easy refilling and maintenance, energy-efficient operation reducing electricity consumption by 60% compared to traditional air conditioning units.',
    price: '8499.99',
    image: '/assets/electronics/cooler1.jpg',
  },
  {
    name: 'ASAN Smart LED Bulb Pro',
    category: 'Lighting',
    spec: 'Transform your space with ASAN Smart LED Bulb Pro offering 16 million color options and adjustable brightness levels. Compatible with voice assistants and smartphone apps for seamless control from anywhere. Features energy-saving technology consuming only 9 watts while delivering equivalent 60-watt incandescent brightness. Lifespan of 50000 hours ensuring years of reliable performance.',
    price: '599.99',
    image: '/assets/electronics/bulb1.jpg',
  },
  {
    name: 'ASAN Portable Power Bank XL',
    category: 'Power',
    spec: 'Charge your devices on the go with ASAN Portable Power Bank XL featuring massive 25000mAh capacity supporting up to 5 simultaneous charges. Includes multiple port options including USB-C, Micro USB and Lightning connectors. Fast charging technology fully recharges most smartphones within 30 minutes. Comes with premium carrying pouch and comprehensive warranty coverage.',
    price: '1999.99',
    image: '/assets/electronics/powerbank1.jpg',
  },
  {
    name: 'ASAN Tower Speaker System',
    category: 'Audio',
    spec: 'Experience immersive surround sound with ASAN Tower Speaker System featuring dual drivers and powerful bass radiator. Supports wireless connectivity via Bluetooth and wired connections through 3.5mm audio jack. Dynamic frequency response from 20Hz to 20kHz captures full spectrum of audio with crystal clarity. Perfect for home entertainment, gaming, and music enthusiasts seeking premium sound quality experience.',
    price: '6999.99',
    image: '/assets/electronics/speaker1.jpg',
  },
]

async function insertDummyData() {
  try {
    const connection = await pool.getConnection()
    
    for (const product of dummyProducts) {
      await connection.execute(
        'INSERT INTO products (name, category, spec, price, image) VALUES (?, ?, ?, ?, ?)',
        [product.name, product.category, product.spec, product.price, product.image],
      )
      console.log(`✓ Added: ${product.name}`)
    }
    
    connection.release()
    console.log('\n✓ All dummy data inserted successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error inserting dummy data:', error)
    process.exit(1)
  }
}

insertDummyData()
