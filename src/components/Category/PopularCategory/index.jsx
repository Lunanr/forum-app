import React from 'react';
import PropTypes from 'prop-types';

export default function PopularCategory({ categories, filter, setFilter }) {
  return (
    <div className=" flex flex-col gap-4">
      <h2 className="font-regular text-lg">Category Popular</h2>
      <div className="flex flex-row flex-wrap gap-3 mb-5">
        {Array.from(categories).map((category) => {
          if (filter === category) {
            return (
              <button
                key={category}
                onClick={() => setFilter('')}
                type="button"
                // Dijalankan ke dalam classname kemudian ketika di klik kembali filter kosong
                className="rounded-lg px-4 py-1 bg-blue-700 text-lg "
              >
                {`# ${category}`}
              </button>
            );
          }
          return (
            <button
              key={category}
              onClick={() => setFilter(category)}
              type="button"
              className="rounded-lg px-4 py-1 bg-blue-300 text-lg "
            >
              {`# ${category}`}
            </button>
          );
        })}
      </div>
    </div>
  );
}

PopularCategory.propTypes = {
  categories: PropTypes.objectOf(PropTypes.string).isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};