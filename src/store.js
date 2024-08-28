import create from 'zustand';

const useStore = create((set) => ({
  data: {
    dashboardTitle: "CNAPP Dashboard",
    categories: [
      {
        name: "CSPM Executive Dashboard",
        widgets: [
          {
            type: "donut_chart",
            title: "Cloud Accounts",
            data: {
              connected: 2,
              notConnected: 2
            }
          },
          {
            type: "donut_chart",
            title: "Cloud Account Risk Assessment",
            data: {
              failed: 1689,
              warning: 681,
              notAvailable: 36,
              passed: 7253,
              total: 9659
            }
          }
        ]
      },
      {
        name: "CWPP Dashboard",
        widgets: [
          {
            type: "message",
            title: "Top 5 Namespace Specific Alerts",
            data: "No graph data available!"
          },
          {
            type: "message",
            title: "Workload Alerts",
            data: "No graph data available!"
          }
        ]
      },
      {
        name: "Registry Scan",
        widgets: [
          {
            type: "horizontal_stacked_bar_chart",
            title: "Image Risk Assessment",
            data: {
              critical: 1256,
              high: 150,
              medium: 96,
              low: 90,
              total: 1470
            }
          },
          {
            type: "horizontal_stacked_bar_chart",
            title: "Image Security Issues",
            data: {
              critical: 70,
              high: 10,
              medium: 90,
              low: 70,
              total: 153
            }
          }
        ]
      }
    ]
  },
  addWidget: (categoryIndex, newWidget) => set((state) => {
    const updatedCategories = state.data.categories.map((category, index) => {
      if (index === categoryIndex) {
        return {
          ...category,
          widgets: [...category.widgets, newWidget],
        };
      }
      return category;
    });
    return { data: { ...state.data, categories: updatedCategories } };
  }),
  deleteWidget: (categoryIndex, widgetIndex) => set((state) => {
    const updatedCategories = state.data.categories.map((category, index) => {
      if (index === categoryIndex) {
        return {
          ...category,
          widgets: category.widgets.filter((_, i) => i !== widgetIndex),
        };
      }
      return category;
    });
    return { data: { ...state.data, categories: updatedCategories } };
  }),
}));

export default useStore;
