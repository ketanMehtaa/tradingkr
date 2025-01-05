import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { ArrowUpRight, Calendar, Users, IndianRupee, Percent } from 'lucide-react';
import ipodata from '../../sme.json'; // Import your JSON data

const IPOComponent = ({params}) => {
  // Sample data from the JSON
  const {name} = params;
  const decodedName = decodeURIComponent(name);  // Manually decode if needed
  console.log("Decoded name:", decodedName);

//   const ipoData? = ipodata?[0];
  const ipoData = ipodata.find((ipo) => ipo.name === decodedName);


  return (
    <div className="container mx-auto px-4 py-8">
      {/*------------------------------------------------------------ Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{ipoData?.name}</h1>
        <p className="text-gray-600">{ipoData?.listingAt}</p>
      </div>

      {/* ----------------------------------------------------------- Key Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="flex items-center p-6">
            <IndianRupee className="w-8 h-8 text-blue-500 mr-4" />
            <div>
              <p className="text-sm text-gray-600">Issue Size</p>
              <p className="font-semibold">{ipoData?.issueSize}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <Calendar className="w-8 h-8 text-green-500 mr-4" />
            <div>
              <p className="text-sm text-gray-600">Open Date</p>
              <p className="font-semibold">{ipoData?.ipoOpenDate}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <Calendar className="w-8 h-8 text-red-500 mr-4" />
            <div>
              <p className="text-sm text-gray-600">close Date</p>
              <p className="font-semibold">{ipoData?.ipoCloseDate}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <ArrowUpRight className="w-8 h-8 text-purple-500 mr-4" />
            <div>
              <p className="text-sm text-gray-600">Price Band</p>
              <p className="font-semibold">{ipoData?.priceBand}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <Users className="w-8 h-8 text-orange-500 mr-4" />
            <div>
              <p className="text-sm text-gray-600">Lot Size</p>
              <p className="font-semibold">{ipoData?.lotSize} shares</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Users className="w-8 h-8 text-orange-500 mr-4" />
            <div>
              <p className="text-sm text-gray-600">Minimum Investment</p>
              <p className="font-semibold">{ipoData?.minimumInvestmentRetail} </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* --------------------------------------------------------------------About Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Company</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{ipoData?.about}</p>
        </CardContent>
      </Card>

      {/* ------------------------------------------------------------------Subscription Status */}
      <Card className="mb-8">
        {/* <CardHeader title="Subscription Status" /> */}
        <CardHeader>
          <CardTitle className="text-xs md:text-base">Subscription Status</CardTitle>
          {/* <CardDescription>You have 3 unread messages.</CardDescription> */}
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-xs text-left py-2 px-2 font-medium md:text-base">Category</th>
                  <th className="text-xs text-right py-2 px-2 font-medium md:text-base">Shares Offered</th>
                  <th className="text-xs text-right py-2 px-2 font-medium md:text-base">Subscription Times (x)</th>
                  <th className="text-xs text-right py-2 px-2 font-medium md:text-base">Total Amount (Cr)</th>
                  <th className="text-xs text-right py-2 px-2 font-medium md:text-base">Total Applications</th>
                </tr>
              </thead>
              <tbody>
                {ipoData?.subscriptionStatus.categories.map((category, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-2 text-xs md:text-base">{category.investorCategory}</td>
                    <td className="text-right py-2 px-2 text-xs md:text-base">{category.sharesOffered}</td>
                    <td className="text-right py-2 px-2 text-xs md:text-base">{category.subscriptionTimes}x</td>
                    <td className="text-right py-2 px-2 text-xs md:text-base">
                      {category.totalAmountCr ? category.totalAmountCr : '-'}
                    </td>
                    <td className="text-right py-2 px-2 text-xs md:text-base">
                      {category.totalApplications ? category.totalApplications : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      {/* Financial Performance */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xs md:text-base"> Financial Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Revenue</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>FY 2024</span>
                  <span className="font-medium">{ipoData?.revenueFY24}</span>
                </div>
                <div className="flex justify-between">
                  <span>FY 2023</span>
                  <span className="font-medium">{ipoData?.revenueFY23}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Profit After Tax</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>FY 2024</span>
                  <span className="font-medium">{ipoData?.profitAfterTaxFY24}</span>
                </div>
                <div className="flex justify-between">
                  <span>FY 2023</span>
                  <span className="font-medium">{ipoData?.profitAfterTaxFY23}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IPOComponent;
