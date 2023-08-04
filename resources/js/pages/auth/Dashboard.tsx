import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
  faHome,
  faTruckFast,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "./../../components/auth/breadcrumb/Breadcrumb";
import BreadcrumbLink from "./../../components/auth/breadcrumb/BreadcrumbLink";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Line, Doughnut } from "react-chartjs-2";

export default function Dashboard() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const doughnutChart = {
    labels: ["Delivered", "Canceled", "New"],
    datasets: [
      {
        label: "Order Status",
        data: [1040, 50, 370],
        backgroundColor: [
          "rgb(133, 105, 241)",
          "rgb(164, 101, 241)",
          "rgb(101, 143, 241)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const lineChart = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales Report",
        backgroundColor: "hsl(252, 82.9%, 67.8%)",
        borderColor: "hsl(252, 82.9%, 67.8%)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  return (
    <>
      <Breadcrumb title="Dashboard">
        <>
          <BreadcrumbLink name="Home" icon={faHome} />
          <BreadcrumbLink name="Dashboard" disabled />
        </>
      </Breadcrumb>

      <section className="mb-5">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 xl:w-3/12">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-white/5 rounded mb-6 xl:mb-0 shadow-lg mr-0 lg:mr-4">
              <div className="flex-auto p-3">
                <div className="flex flex-wrap">
                  <div className="text-white px-6 py-5 shadow-lg rounded bg-blue-500">
                    <FontAwesomeIcon icon={faUsers} className="text-lg" />
                  </div>
                  <div className="ml-2">
                    <h5 className="mb-3 font-semibold">New Users</h5>
                    <p className="font-bold">450</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-white/5 rounded mb-6 xl:mb-0 shadow-lg mr-0 xl:mr-4">
              <div className="flex-auto p-3">
                <div className="flex flex-wrap">
                  <div className="text-white px-6 py-5 shadow-lg rounded bg-yellow-500">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="text-lg"
                    />
                  </div>
                  <div className="ml-2">
                    <h5 className="mb-3 font-semibold">Total Products</h5>
                    <p className="font-bold">5045</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-white/5 rounded mb-6 xl:mb-0 shadow-lg mr-0 lg:mr-4">
              <div className="flex-auto p-3">
                <div className="flex flex-wrap">
                  <div className="text-white px-6 py-5 shadow-lg rounded bg-red-500">
                    <FontAwesomeIcon icon={faBagShopping} className="text-lg" />
                  </div>
                  <div className="ml-2">
                    <h5 className="mb-3 font-semibold">New Orders</h5>
                    <p className="font-bold">370</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-white/5 rounded mb-6 xl:mb-0 shadow-lg">
              <div className="flex-auto p-3">
                <div className="flex flex-wrap">
                  <div className="text-white px-6 py-5 shadow-lg rounded bg-green-500">
                    <FontAwesomeIcon icon={faTruckFast} className="text-lg" />
                  </div>
                  <div className="ml-2">
                    <h5 className="mb-3 font-semibold">Sales</h5>
                    <p className="font-bold">1040</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 flex flex-wrap">
        <div className="overflow-hidden w-full lg:w-8/12 mb-5 lg:mb-0">
          <div className="bg-white dark:bg-white/5 text-slate-800 dark:text-slate-100 shadow rounded-lg mr-0 lg:mr-3">
            <div className="py-3 px-5 bg-gray-100 dark:bg-gray-400/10">
              Sales Report
            </div>
            <Line data={lineChart} className="p-8" />
          </div>
        </div>
        <div className="bg-white dark:bg-white/5 text-slate-800 dark:text-slate-100 shadow rounded-lg overflow-hidden w-full lg:w-4/12">
          <div className="py-3 px-5 bg-gray-100 dark:bg-gray-400/10">
            Order Report
          </div>
          <Doughnut data={doughnutChart} className="p-8" />
        </div>
      </section>
    </>
  );
}
