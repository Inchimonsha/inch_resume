import React from 'react';

export const ProjectPage = () => {

  const projects = [
    { id: 1, title: 'Проект 1', imageUrl: 'https://via.placeholder.com/300x200.png?text=Проект+1', url: '/projects/1' },
    { id: 2, title: 'Проект 2', imageUrl: 'https://via.placeholder.com/300x200.png?text=Проект+2', url: '/projects/2' },
    { id: 3, title: 'Проект 3', imageUrl: 'https://via.placeholder.com/300x200.png?text=Проект+3', url: '/projects/3' },
    { id: 4, title: 'Проект 4', imageUrl: 'https://via.placeholder.com/300x200.png?text=Проект+4', url: '/projects/4' },
  ];
  

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      Project
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {projects.map((project) => (
        <a key={project.id} href={project.url} className="block p-4 border rounded-lg shadow-lg hover:bg-gray-100">
          <img src={project.imageUrl} alt={project.title} className="w-full h-auto rounded-md" />
          <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
        </a>
      ))}
    </div>
    </div>
  );
};