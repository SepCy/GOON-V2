'use client';
import React, { useState } from 'react';

const InternetForm: React.FC = () => {
  return (
    <div className="z-100 absolute right-8 top-16 bottom-0 h-fit w-64 rounded-md bg-white p-4">
      <form action="" method="">
        <div className="pb-4 text-orange-900">Internet</div>
        <input
          className="focus:shadow-outline w-full rounded-sm border border-orange-200 p-1 px-2 text-orange-900 focus:outline-none"
          type="text"
          placeholder="Entrez le code "
        />
        <input
          className="mt-4 cursor-pointer rounded-md bg-orange-400 px-2 py-1 text-white shadow-md transition-all duration-100 hover:-translate-y-1 hover:bg-orange-600 hover:transition-all hover:duration-100"
          type="submit"
        />
      </form>
    </div>
  );
};

export default InternetForm;
