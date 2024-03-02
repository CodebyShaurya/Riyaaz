import king from './king of hell.jpg';
import kg from './joyboy.jpg';
import a from './Itachi.jpg';

const products = [
    {
      id: 1,
      name: 'King of hell',
      href: '#',
      imageSrc: 'static/media/king%20of%20hell.223a385a4109d8a5fdcf.jpg',
      imageAlt: "King of Hell",
      price: 'Rs. 500',
      color: 'White',
    },
    {
        id: 2,
        name: 'Joyboy',
        href: '#',
        imageSrc: 'static/media/joyboy.d120d29a48cd3912e5f7.jpg',
        imageAlt: "Joyboy",
        price: 'Rs. 500',
        color: 'Black',
      },
      {
        id: 3,
        name: 'Sacrifice',
        href: '#',
        imageSrc: 'http://localhost:3000/static/media/Itachi.37bb8c1ff08157c39971.jpg',
        imageAlt: "Joyboy",
        price: 'Rs. 500',
        color: 'Black',
      },
  ]
  
  export default function Example() {
    return (
      
      <div className="bg-white">
        {/* <img src={king}/> */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href='product'>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }