/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";

var routes = [
  {
    path: "/dashboard",
    name: "Color Cast Removal",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "#rgb-histogram",
    name: "RGB Histogram",
    icon: "tim-icons icon-image-02",
    layout: "",
  },
  {
    path: "#history",
    name: "History",
    icon: "tim-icons icon-time-alarm",
    layout: "",
  },
];
export default routes;
