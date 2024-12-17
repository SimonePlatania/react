import React from 'react';

function Card({ title, description, imgURL }) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 m-4 bg-white">
      <div className="relative">
        <img 
          src={imgURL} 
          alt={title} 
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

function App() {
  const cities = [
    {
      title: "Tokyo",
      imgURL: "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Tokyo si trova in Giappone"
    },
    {
      title: "Roma",
      imgURL: "https://plus.unsplash.com/premium_photo-1661964123160-8d049fa07f0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Roma si trova in Italia"
    },
    {
      title: "New York",
      imgURL: "https://plus.unsplash.com/premium_photo-1682048358672-1c5c6c9ed2ae?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "New York si trova negli Stati Uniti"
    },
    {
      title: "Paris",
      imgURL: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Parigi si trova in Francia"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center bg-gray-100 min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cities.map((city, index) => (
          <Card 
            key={index}
            title={city.title}
            imgURL={city.imgURL}
            description={city.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;