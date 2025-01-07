// import React from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import mainBoardIpoData from '../../mainBoardIpo.json'; // Import your mainboard IPO JSON data

// const MainboardIPOComponent = ({ params }: { params: { name: string } }) => {
//   const { name } = params;
//   const decodedName = decodeURIComponent(name);
//   const ipoData = mainBoardIpoData.find((ipo) => ipo.name === decodedName);

//   if (!ipoData) {
//     return <div className="container mx-auto px-4 py-8">IPO data not found for {decodedName}</div>;
//   }

//   const renderTable = (data: Record<string, any>) => (
//     <div className="overflow-x-auto">
//       <table className="w-full table-fixed text-sm text-left">
//         <thead className="text-xs uppercase bg-gray-100">
//           <tr>
//             <th className="w-1/2 py-2 px-4 font-medium">Field</th>
//             <th className="w-1/2 py-2 px-4 font-medium">Value</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(data).map(([key, value]) => (
//             <tr key={key} className="border-b">
//               <td className="w-1/2 py-2 px-4 font-medium">{key}</td>
//               <td className="w-1/2 py-2 px-4">{value || '-'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Header Section */}
//       <div className="mb-8">
//         <h1 className="text-2xl md:text-3xl font-bold mb-2">{ipoData.name}</h1>
//         <p className="text-gray-600">Listing At: {ipoData.listingAt}</p>
//       </div>

//       <Tabs defaultValue="basic-details" className="space-y-4">
//         <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
//           <TabsTrigger value="basic-details">Basic Details</TabsTrigger>
//           <TabsTrigger value="issue-details">Issue Details</TabsTrigger>
//           <TabsTrigger value="company-info">Company Info</TabsTrigger>
//           <TabsTrigger value="financials">Financials</TabsTrigger>
//         </TabsList>

//         <TabsContent value="basic-details">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Card className="mb-6 bg-slate-50 shadow-md rounded-lg">
//               <CardHeader>
//                 <CardTitle>Basic Details</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 {renderTable({
//                   'Issue Size': ipoData.issueSize,
//                   'Fresh Issue': ipoData.freshIssueShares,
//                   'Offer For Sale': ipoData.offerForSaleShares,
//                   'IPO Open Date': ipoData.ipoOpenDate,
//                   'IPO Close Date': ipoData.ipoCloseDate,
//                   'Allotment Date': ipoData.allotmentDate,
//                   'Listing Date': ipoData.listingDate,
//                   'Price Band': ipoData.priceBand,
//                   'Face Value': ipoData.faceValue,
//                   'Lot Size': ipoData.lotSize,
//                   'Minimum Investment (Retail)': ipoData.minimumInvestmentRetail,
//                   'Minimum Investment (HNI)': ipoData.minimumInvestmentHNI,
//                 })}
//               </CardContent>
//             </Card>

//             <Card className="mb-6 bg-slate-50 shadow-md rounded-lg">
//               <CardHeader>
//                 <CardTitle>Holding & Portion Details</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 {renderTable({
//                   'Pre-Issue Promoter Holding': ipoData.preIssuePromoterHolding,
//                   'Post-Issue Promoter Holding': ipoData.postIssuePromoterHolding,
//                   'QIB Portion': ipoData.qibPortion,
//                   'NII Portion': ipoData.niiPortion,
//                   'RII Portion': ipoData.riiPortion,
//                   'Anchor Investor Portion': ipoData.anchorInvestorPortion,
//                   'Anchor Bid Date': ipoData.anchorBidDate,
//                 })}
//               </CardContent>
//             </Card>
//           </div>
//         </TabsContent>

//         <TabsContent value="issue-details">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Card className="mb-6 bg-slate-50 shadow-md rounded-lg">
//               <CardHeader>
//                 <CardTitle>Issue Details</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 {renderTable({
//                   'Total Shares Offered': ipoData.totalSharesOffered,
//                   'Fresh Issue Amount': ipoData.freshIssueAmount,
//                   'Offer For Sale Amount': ipoData.offerForSaleAmount,
//                   'Issue Type': ipoData.issueType,
//                   'Pre-Issue Share Holding': ipoData.preIssueShareHolding,
//                   'Post-Issue Share Holding': ipoData.postIssueShareHolding,
//                 })}
//               </CardContent>
//             </Card>

//             <Card className="mb-6 bg-slate-50 shadow-md rounded-lg">
//               <CardHeader>
//                 <CardTitle>Key People</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 {renderTable({
//                 //   Promoters: ipoData.promoters?.join(', ') || '-',
//                   'Lead Managers': ipoData.leadManagers?.join(', ') || '-',
//                   Registrar: ipoData.registrar,
//                 })}
//               </CardContent>
//             </Card>

//             {ipoData.objectsOfIssue && (
//               <Card className="mb-6 bg-slate-50 shadow-md rounded-lg">
//                 <CardHeader>
//                   <CardTitle>Objects of the Issue</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="list-disc list-inside">
//                     {ipoData.objectsOfIssue.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </TabsContent>

//         <TabsContent value="company-info">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Card className="mb-6 bg-slate-50 shadow-md rounded-lg">
//               <CardHeader>
//                 <CardTitle>Company Information</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div>
//                   <span className="font-semibold">About:</span> {ipoData.about}
//                 </div>
//                 {ipoData.products && (
//                   <div>
//                     <span className="font-semibold">Products:</span> {ipoData.products.join(', ')}
//                   </div>
//                 )}
//                 {ipoData.companyContactDetails && (
//                   <div>
//                     <h4 className="font-semibold">Contact Details:</h4>
//                     {renderTable(ipoData.companyContactDetails)}
//                   </div>
//                 )}
//               </CardContent>
//             </Card>

//             {ipoData.keyPerformanceIndicators && (
//               <Card className="mb-6 bg-slate-50 shadow-md rounded-lg">
//                 <CardHeader>
//                   <CardTitle>Key Performance Indicators</CardTitle>
//                 </CardHeader>
//                 <CardContent>{renderTable(ipoData.keyPerformanceIndicators)}</CardContent>
//               </Card>
//             )}
//           </div>
//         </TabsContent>

//         <TabsContent value="financials">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Card className="mb-6 bg-slate-50 shadow-md rounded-lg">
//               <CardHeader>
//                 <CardTitle>Financial Performance</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 {renderTable({
//                   'Revenue FY24': ipoData.revenueFY24,
//                   'Revenue FY23': ipoData.revenueFY23,
//                   'Profit After Tax FY24': ipoData.profitAfterTaxFY24,
//                   'Profit After Tax FY23': ipoData.profitAfterTaxFY23,
//                 })}
//               </CardContent>
//             </Card>

//             {ipoData.eps && ipoData.peRatio && (
//               <Card className="mb-6 bg-slate-50 shadow-md rounded-lg">
//                 <CardHeader>
//                   <CardTitle>EPS & PE Ratio</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   {renderTable({
//                     'EPS (Pre-IPO)': ipoData.eps.preIPO,
//                     'EPS (Post-IPO)': ipoData.eps.postIPO,
//                     'PE Ratio (Pre-IPO)': ipoData.peRatio.preIPO,
//                     'PE Ratio (Post-IPO)': ipoData.peRatio.postIPO,
//                   })}
//                 </CardContent>
//               </Card>
//             )}

//             <Card className="mb-6 bg-slate-50 shadow-md rounded-lg">
//               <CardHeader>
//                 <CardTitle>GMP & Subscription</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 {renderTable({
//                   GMP: ipoData.gmp,
//                   'Subscription (% - Total)':
//                     ipoData.subscriptionStatus?.categories?.find((cat) => cat.investorCategory === 'Total')
//                       ?.subscriptionTimes + 'x' || '-',
//                 })}
//               </CardContent>
//             </Card>

//             {ipoData.subscriptionStatus && (
//               <Card className="mb-6 bg-slate-50 shadow-md rounded-lg">
//                 <CardHeader>
//                   <CardTitle>Subscription Status</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="overflow-x-auto">
//                     <table className="w-full text-sm text-left">
//                       <thead className="text-xs uppercase bg-gray-100">
//                         <tr>
//                           <th className="py-2 px-4 font-medium">Category</th>
//                           <th className="py-2 px-4 font-medium text-right">Shares Offered</th>
//                           <th className="py-2 px-4 font-medium text-right">Subscription Times (x)</th>
//                           <th className="py-2 px-4 font-medium text-right">Total Amount (Cr)</th>
//                           <th className="py-2 px-4 font-medium text-right">Total Applications</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {ipoData.subscriptionStatus.categories.map((category, index) => (
//                           <tr key={index} className="border-b">
//                             <td className="py-2 px-4">{category.investorCategory}</td>
//                             <td className="py-2 px-4 text-right">{category.sharesOffered}</td>
//                             <td className="py-2 px-4 text-right">{category.subscriptionTimes}x</td>
//                             <td className="py-2 px-4 text-right">{category.totalAmountCr || '-'}</td>
//                             <td className="py-2 px-4 text-right">{category.totalApplications || '-'}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </CardContent>
//               </Card>
//             )}

//             {ipoData.brokerRecommendations && (
//               <Card className="mb-6 bg-slate-50 shadow-md rounded-lg">
//                 <CardHeader>
//                   <CardTitle>Broker Recommendations</CardTitle>
//                 </CardHeader>
//                 <CardContent>{renderTable(ipoData.brokerRecommendations)}</CardContent>
//               </Card>
//             )}
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default MainboardIPOComponent;
