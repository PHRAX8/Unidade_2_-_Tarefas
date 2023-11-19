import { useState } from 'react';

export default function Movies({ data }) {
  const [formData, setFormData] = useState({
    name: '',
    year: '',
  });

  const [result, setResult] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();

    const res = await fetch(`http://www.omdbapi.com/?apikey=2763e91&t=${formData.name}&y=${formData.year}`);
    const newData = await res.json();

    setResult(newData);
  }

  return (
    <div>
      <div>
        {result && result.Title && result.Year ? (
          <div>
            <h2>{result.Title} --- {result.Year}</h2>
            {result.Poster && <img src={result.Poster} alt={`${result.Title} Poster`} />}
          </div>
        ) : (
          <div>
            {data && data.Title && data.Year ? (
              <div>
                <h2>{data.Title} --- {data.Year}</h2>
                {data.Poster && <img src={data.Poster} alt={`${data.Title} Poster`} />}
              </div>
            ) : (
              <div>No data available</div>
            )}
          </div>
        )}
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label>NAME</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label>YEAR</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            />
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
