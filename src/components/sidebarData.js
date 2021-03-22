export const sidebarData = [
  { title: "Home", path: "/", name: "home" },
  // {
  // title: "Upper Salem River",
  // path: "#",
  // name: "upper",
  // subNav: [
  {
    title: "Model Performance",
    path: "#",
    name: "model",
    subNav: [
      {
        title: "Streamflow",
        component: "Streamflow",
        path: "/upper_salem_river/model_performance/streamflow",
      },
      {
        title: "Sediment",
        component: "Sediment",
        path: "/upper_salem_river/model_performance/sediment",
      },
      {
        title: "TP",
        component: "TP",
        path: "/upper_salem_river/model_performance/tp",
      },
    ],
  },
  {
    title: "Uncertainty Analysis (Streamflow)",
    path: "#",
    name: "uncer",
    subNav: [
      {
        title: "RCP-4.5",
        path: "/upper_salem_river/uncertainty/rcp45.html",
      },
      {
        title: "RCP-8.5",
        path: "/upper_salem_river/uncertainty/rcp85.html",
      },
    ],
  },
  {
    title: "Mean Monthly Temperature",
    path: "#",
    name: "temp",
    subNav: [
      {
        title: "RCP-4.5",
        path: "/upper_salem_river/temperature/rcp45.html",
        name: "tempRcp4",
      },
      {
        title: "RCP-8.5",
        path: "/upper_salem_river/temperature/rcp85.html",
        name: "tempRcp8",
      },
    ],
  },
  {
    title: "Mean Monthly Precipitation",
    path: "#",
    name: "pptn",
    subNav: [
      {
        title: "RCP-4.5",
        path: "/upper_salem_river/precip/rcp45.html",
        name: "pptnRcp4",
      },
      {
        title: "RCP-8.5",
        path: "/upper_salem_river/precip/rcp85.html",
        name: "pptnRcp8",
      },
    ],
  },
  {
    title: "Water Budget",
    path: "#",
    name: "water",
    subNav: [
      {
        title: "RCP-4.5",
        path: "/upper_salem_river/water/rcp45.html",
        name: "waterRcp4",
      },
      {
        title: "RCP-8.5",
        path: "/upper_salem_river/water/rcp85.html",
        name: "waterRcp8",
      },
    ],
  },
  {
    title: "Climate Change Impact",
    path: "#",
    name: "clima",
    subNav: [
      {
        title: "Hydrology",
        path: "/upper_salem_river/impact/hydrology.html",
        name: "hydro",
      },
      {
        title: "Water Quality",
        path: "/upper_salem_river/impact/quality.html",
        name: "qual",
      },
    ],
  },
  {
    title: "Detail Analysis of TP",
    path: "#",
    name: "detai",
    subNav: [
      {
        title: "RCP-4.5",
        path: "#",
        name: "detailRcp4",
        subNav: [
          {
            title: "Organic P",
            path: "/upper_salem_river/tp/rcp45/organic.html",
            name: "organ4",
          },
          {
            title: "Mineral P",
            path: "/upper_salem_river/tp/rcp45/mineral.html",
            name: "miner4",
          },
        ],
      },
      {
        title: "RCP-8.5",
        path: "#",
        name: "detailRcp8",
        subNav: [
          {
            title: "Organic P",
            path: "/upper_salem_river/tp/rcp85/organic.html",
            name: "organ8",
          },
          {
            title: "Mineral P",
            path: "/upper_salem_river/tp/rcp85/mineral.html",
            name: "miner8",
          },
        ],
      },
    ],
  },
  {
    title: "Climate Change Vulnerability Index",
    path: "#",
    name: "index",
    subNav: [
      {
        title: "RCP-4.5",
        path: "#",
        name: "indexRcp4",
        subNav: [
          {
            title: "Potential to Flooding",
            path: "/upper_salem_river/vulnerable/rcp45/flooding.html",
          },
          {
            title: "Potential to Sedimentation",
            path: "/upper_salem_river/vulnerable/rcp45/sediment.html",
          },
          {
            title: "Potential to Eutrophication",
            path: "/upper_salem_river/vulnerable/rcp45/eutroph.html",
          },
          {
            title: "Composite Index",
            path: "/upper_salem_river/vulnerable/rcp45/composite.html",
          },
        ],
      },
      {
        title: "RCP-8.5",
        path: "#",
        name: "indexRcp8",
        subNav: [
          {
            title: "Potential to Flooding",
            path: "/upper_salem_river/vulnerable/rcp85/flooding.html",
          },
          {
            title: "Potential to Sedimentation",
            path: "/upper_salem_river/vulnerable/rcp85/sediment.html",
          },
          {
            title: "Potential to Eutrophication",
            path: "/upper_salem_river/vulnerable/rcp85/eutroph.html",
          },
          {
            title: "Composite Index",
            path: "/upper_salem_river/vulnerable/rcp85/composite.html",
          },
        ],
      },
    ],
  },
  {
    title: "Adaptation Strategies",
    path: "#",
    name: "adapt",
    subNav: [
      {
        title: "BMP Application Area (10%)",
        path: "#",
        name: "bmp10",
        subNav: [
          {
            title: "RCP-4.5",
            path: "#",
            name: "bmp104",
            subNav: [
              {
                title: "Streamflow",
                path:
                  "/upper_salem_river/adaptation/bmp10/rcp45/streamflow.html",
                name: "strea104",
              },
              {
                title: "Surface Runoff",
                path: "/upper_salem_river/adaptation/bmp10/rcp45/runoff.html",
                name: "surfa104",
              },
              {
                title: "Sediment",
                path: "/upper_salem_river/adaptation/bmp10/rcp45/sediment.html",
                name: "sedim104",
              },
              {
                title: "TP",
                path: "/upper_salem_river/adaptation/bmp10/rcp45/tp.html",
                name: "tp104",
              },
            ],
          },
          {
            title: "RCP-8.5",
            path: "#",
            name: "bmp108",
            subNav: [
              {
                title: "Streamflow",
                path:
                  "/upper_salem_river/adaptation/bmp10/rcp85/streamflow.html",
                name: "strea108",
              },
              {
                title: "Surface Runoff",
                path: "/upper_salem_river/adaptation/bmp10/rcp85/runoff.html",
                name: "surfa108",
              },
              {
                title: "Sediment",
                path: "/upper_salem_river/adaptation/bmp10/rcp85/sediment.html",
                name: "sedim108",
              },
              {
                title: "TP",
                path: "/upper_salem_river/adaptation/bmp10/rcp85/tp.html",
                name: "tp108",
              },
            ],
          },
        ],
      },
      {
        title: "BMP Application Area (46%)",
        path: "#",
        name: "bmp46",
        subNav: [
          {
            title: "RCP-4.5",
            path: "#",
            name: "bmp464",
            subNav: [
              {
                title: "Streamflow",
                path:
                  "/upper_salem_river/adaptation/bmp46/rcp45/streamflow.html",
                name: "strea464",
              },
              {
                title: "Surface Runoff",
                path: "/upper_salem_river/adaptation/bmp46/rcp45/runoff.html",
                name: "surfa464",
              },
              {
                title: "Sediment",
                path: "/upper_salem_river/adaptation/bmp46/rcp45/sediment.html",
                name: "sedim464",
              },
              {
                title: "TP",
                path: "/upper_salem_river/adaptation/bmp46/rcp45/tp.html",
                name: "tp464",
              },
            ],
          },
          {
            title: "RCP-8.5",
            path: "#",
            name: "bmp468",
            subNav: [
              {
                title: "Streamflow",
                path:
                  "/upper_salem_river/adaptation/bmp46/rcp85/streamflow.html",
                name: "strea468",
              },
              {
                title: "Surface Runoff",
                path: "/upper_salem_river/adaptation/bmp46/rcp85/runoff.html",
                name: "surfa468",
              },
              {
                title: "Sediment",
                path: "/upper_salem_river/adaptation/bmp46/rcp85/sediment.html",
                name: "sedim468",
              },
              {
                title: "TP",
                path: "/upper_salem_river/adaptation/bmp46/rcp85/tp.html",
                name: "tp468",
              },
            ],
          },
        ],
      },
    ],
  },
  //   ],
  // },
];
