import React from 'react';
import { testimonialsData as TestData } from './data';

export default function Testimonial() {
  return (
    <section id="testimonials" className="p-2 bg-gray-300 h-auto">
      <h1 className="text-2xl flex justify-center font-bold text-orange-700">Testimonials</h1>
      {TestData.map((data, i) => (
        <div key={i} className="max-w mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 p-4 md:p-6 lg:p-8">
          <div className="px-6 py-4">
            <p className="text-gray-700 text-base mb-4">
              <i>{data.text}</i>
            </p>
            <div className="text-center flex flex-col justify-end content-center md:flex-row md:justify-between">
              <ul>
                <li>
                  <p className="text-xl font-semibold">{data.author}</p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm">{data.title}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
