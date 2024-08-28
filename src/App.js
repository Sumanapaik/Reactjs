import React, { useState } from 'react';
import './dashboard.css';
import DonutChart from './DonutChart';
import BarChartComponent from './BarChartComponent';
import HorizontalStackedBarChartComponent from './HorizontalStackedBarChartComponent';
import Donutchart1 from './Dountchart1';
import useStore from './store'; // Import the store

const App = () => {
  const { data, addWidget, deleteWidget } = useStore();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = searchTerm
    ? data.categories.map(category => ({
        ...category,
        widgets: category.widgets.filter(widget =>
          widget.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }))
    : data.categories;

  return (
    <div className="dashboard">
      <h1>{data.dashboardTitle}</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {filteredCategories.some(category => category.widgets.length > 0) ? (
        filteredCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="category">
            <h2>{category.name}</h2>
            <div className="widgets-container">
              {category.widgets.map((widget, widgetIndex) => (
                <div key={widgetIndex} className="widget">
                  <h3>{widget.title}</h3>
                  <div className="chart">
                    {widget.type === 'donut_chart' && <DonutChart data={widget.data} />}
                    {widget.type === 'donut_chart' && <Donutchart1 data={widget.data} />}
                    {widget.type === 'bar_chart' && <BarChartComponent data={widget.data} />}
                    {widget.type === 'horizontal_stacked_bar_chart' && (
                      <HorizontalStackedBarChartComponent data={widget.data} />
                    )}
                    {widget.type === 'message' && <p>{widget.data}</p>}
                  </div>
                  <button onClick={() => deleteWidget(categoryIndex, widgetIndex)}>Delete Widget</button>
                </div>
              ))}
            </div>
            <button onClick={() => addWidget(categoryIndex, {
              type: 'message',
              title: 'New Widget',
              data: 'Add Widget'
            })}>
              + Add Widget
            </button>
          </div>
        ))
      ) : (
        <p>No widgets match your search.</p>
      )}
    </div>
  );
};

export default App;
