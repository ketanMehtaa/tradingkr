import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import smeData from './sme.json';
import mainBoardIpoData from './mainBoardIpo.json';
import Link from 'next/link';
import { ContactForm } from './signUp';

const IPODashboard = () => {
  const mainIpo = mainBoardIpoData;
  const SmeIpo = smeData;
  // const sortedIpos = [...SmeIpo].sort((ipo1, ipo2) => {
  //   const date1 = new Date(ipo1.ipoCloseDate);
  //   const date2 = new Date(ipo2.ipoCloseDate);

  //   // Handle invalid dates (important!)
  //   if (isNaN(date1.getTime()) && isNaN(date2.getTime())) return 0; // Both invalid
  //   if (isNaN(date1.getTime())) return 1; // date1 is invalid, put it at the end
  //   if (isNaN(date2.getTime())) return -1; // date2 is invalid, put it at the end

  //   return date2.getTime() - date1.getTime(); // Descending order: date2 - date1
  // });
  const isIpoActive = (openDate: string, closeDate: string): boolean => {
    const now = new Date();
    const open = new Date(openDate);
    const close = new Date(closeDate);
    close.setHours(17, 0, 0, 0);

    return now >= open && now <= close;
  };

  return (
    <div className="container mx-auto ">

      
      <h1 className="text-2xl font-bold mb-2 px-4 pt-2"> IPO Dashboard</h1>

      <Tabs defaultValue="Main Board" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="Main Board">Main</TabsTrigger>
          <TabsTrigger value="SME">Sme</TabsTrigger>

          {/* <TabsTrigger value="open">Open IPOs</TabsTrigger> */}
          {/* <TabsTrigger value="closed">Closed IPOs</TabsTrigger> */}
          {/* <TabsTrigger value="performance">Performance</TabsTrigger> */}
        </TabsList>

        <TabsContent value="Main Board">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming IPOs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        Company
                      </th>
                      <th scope="col" className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        Price Band
                      </th>
                      <th scope="col" className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        Lot Size
                      </th>
                      <th scope="col" className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        Opens
                      </th>
                      <th scope="col" className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        Closes
                      </th>
                      <th scope="col" className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        GMP %
                      </th>
                      <th scope="col" className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        Subscription Total
                      </th>
                      <th scope="col" className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        Issue Size (Cr)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(mainIpo).map((ipo) => (
                      <tr key={ipo.ipoName} className="bg-white border-b hover:bg-gray-50">
                        <td className="px-2 py-1 md:px-6 md:py-3 font-medium">
                          <Link href={`/mainBoardIpo/${ipo.symbol}`}>
                            <span className="cursor-pointer">{ipo.ipoName}</span>
                          </Link>
                        </td>
                        <td className="px-2 py-1 md:px-6 md:py-3">{ipo.pricing.priceBand}</td>
                        <td className="px-2 py-1 md:px-6 md:py-3">{ipo.pricing.lotSize}</td>
                        <td className="px-2 py-1 md:px-6 md:py-3">{ipo.timeline.ipoOpenDate}</td>
                        <td
                          className={`px-2 py-1 md:px-6 md:py-3 ${
                            isIpoActive(ipo.timeline.ipoOpenDate, ipo.timeline.ipoCloseDate) ? 'bg-green-300 ' : ''
                          }`}
                        >
                          {ipo.timeline.ipoCloseDate}
                        </td>
                        <td className="px-2 py-1 md:px-6 md:py-3">{ipo.gmp || '-'}</td>
                        <td className="px-2 py-1 md:px-6 md:py-3">
                          {ipo.subscriptionStatus?.total?.subscriptionTimes || '-'}x
                        </td>
                        <td className="px-2 py-1 md:px-6 md:py-3">{ipo.financials.issueSize}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* <TabsContent value="SME">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming IPOs</CardTitle>
            </CardHeader>
            <CardContent className="">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        Company
                      </th>
                      <th scope="col" className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        Price Band
                      </th>
                      <th scope="col" className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        Lot Size
                      </th>

                      <th scope="col" className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        Opens
                      </th>
                      <th scope="col" className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        Closes
                      </th>
                      <th scope="col" className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        GMP %
                      </th>
                      <th scope="col" className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        Subscription Times
                      </th>
                      <th scope="col" className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        Issue Size (Cr)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedIpos.map((ipo) => (
                      <tr key={ipo.name} className="bg-white border-b hover:bg-gray-50">
                        <td className="px-2 py-1 md:px-6 md:py-3 font-medium">
                          <Link href={`/smeIpo/${encodeURIComponent(ipo.name)}`}>
                            <span className="cursor-pointer">{ipo.name}</span>
                          </Link>
                        </td>
                        <td className="px-2 py-1 md:px-6 md:py-3">{ipo.priceBand}</td>
                        <td className="px-2 py-1 md:px-6 md:py-3">{ipo.lotSize}</td>

                        <td className="px-2 py-1 md:px-6 md:py-3">{ipo.ipoOpenDate}</td>
                        <td
                          className={`px-2 py-1 md:px-6 md:py-3 ${
                            isIpoActive(ipo.ipoOpenDate, ipo.ipoCloseDate) ? 'bg-green-300 ' : ''
                          }`}
                        >
                          {ipo.ipoCloseDate}
                        </td>
                        <td className="px-2 py-1 md:px-6 md:py-3">{ipo.gmp || '-'}</td>
                        <td className="px-2 py-1 md:px-6 md:py-3">
                          {ipo.subscriptionStatus?.categories && ipo.subscriptionStatus.categories.length > 0
                            ? ipo.subscriptionStatus.categories.find(
                                (category) => category.investorCategory === 'Total'
                              )?.subscriptionTimes || '-'
                            : '-'}
                          x
                        </td>
                        <td className="px-2 py-1 md:px-6 md:py-3">{ipo.issueSize}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent> */}

        <TabsContent value="open">
          <Card>
            <CardHeader>
              <CardTitle>Open IPOs</CardTitle>
            </CardHeader>
            <CardContent>{/* Similar table structure for open IPOs */}</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="closed">
          <Card>
            <CardHeader>
              <CardTitle>Closed IPOs</CardTitle>
            </CardHeader>
            <CardContent>{/* Similar table structure for closed IPOs */}</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>IPO Performance</CardTitle>
            </CardHeader>
            <CardContent>{/* Similar table structure for IPO performance */}</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IPODashboard;
