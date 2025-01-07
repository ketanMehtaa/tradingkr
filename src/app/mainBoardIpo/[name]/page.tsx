// IPOComponent.jsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // Replace with your actual UI library
import ipodata from '../../mainBoardIpo.json'; // Update path if needed

const IPOComponent = ({ params }: { params: any }) => {
  const { name } = params;
  const decodedName = decodeURIComponent(name);
  const ipoData = ipodata.find((ipo) => ipo.name === decodedName);

  if (!ipoData) {
    return <div className="container mx-auto px-4 py-8">IPO data not found for {decodedName}</div>;
  }

  const renderTable = (data: Record<string, any>) => (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed text-sm text-left">
        <thead className="text-xs uppercase bg-gray-100">
          <tr>
            <th className="w-1/2 py-2 px-4 font-medium">Field</th>
            <th className="w-1/2 py-2 px-4 font-medium">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key} className="border-b">
              <td className="w-1/2 py-2 px-4 font-medium">{key}</td>
              <td className="w-1/2 py-2 px-4">{value || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{ipoData.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* ------------------------------------------------------------------------------Basic Details */}
        <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Basic Details</CardTitle>
          </CardHeader>
          <CardContent>
            {renderTable({
              'Issue Size': ipoData?.issueSize,
              'Fresh Issue': ipoData?.freshIssueAmount,
              'Offer for Sale': ipoData?.offerForSaleAmount,
              'Price Band': ipoData?.priceBand,
              'Gmp':ipoData?.gmp,
              'Lot Size': ipoData?.lotSize,
              'IPO Open Date': ipoData?.ipoOpenDate,
              'IPO Close Date': ipoData?.ipoCloseDate,
              'Listing Date': ipoData?.listingDate,
              'Listing At': ipoData?.listingAt,
              'Total Shares Offered': ipoData?.totalSharesOffered,
              'Issue Type': ipoData?.issueType,
              'Face Value': ipoData?.faceValue,
            })}
          </CardContent>
        </Card>
        {/* ----------------------------------------------------------------------------------Company Information */}
        <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <span className="font-semibold">About:</span> {ipoData?.about}
            </div>
            {/* {ipoData?.products && (
              <div>
                <span className="font-semibold">Products:</span> {ipoData?.products?.join(', ')}
              </div>
            )} */}
            {/* {ipoData.companyContactDetails && (
              <div>
                <h4 className="font-semibold">Contact Details:</h4>
                {renderTable(ipoData.companyContactDetails)}
              </div>
            )} */}
          </CardContent>
        </Card>
        {/* ------------------------------------------------------------------------------About and Sponsor */}
        {/* <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>About & Sponsor</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{ipoData.about}</p>
            <p className="mt-2 font-medium">Sponsor Info:</p>
            <p>{ipoData.sponsorInfo}</p>
            <p className="mt-2 font-medium">Portfolio Info:</p>
            <p>{ipoData.portfolioInfo}</p>
          </CardContent>
        </Card> */}

        {/* ------------------------------------------------------------------------------Issue Details */}
        {/* <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Issue Details</CardTitle>
          </CardHeader>
          <CardContent>
            {renderTable({
              'Total Shares Offered': ipoData.totalSharesOffered,
              'Issue Type': ipoData.issueType,
              'Face Value': ipoData.faceValue,
            })}
          </CardContent>
        </Card> */}

        {/* ------------------------------------------------------------------------------Holding and portion Details */}
        <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Holding & Portion Details</CardTitle>
          </CardHeader>
          <CardContent>
            {renderTable({
              'QIB Portion': ipoData.qibPortion,
              'NII Portion': ipoData.niiPortion,
              'RII Portion': ipoData.riiPortion,
              //   'Minimum Investment (Retail)': ipoData.minimumInvestmentRetail,
              //   'Minimum Investment (S-HNI)': ipoData.minimumInvestmentSNII,
              //   'Minimum Investment (B-HNI)': ipoData.minimumInvestmentBNII,
              'Anchor Investor Portion': ipoData.anchorInvestorPortion,
              'Anchor Bid Date': ipoData.anchorBidDate,
            })}
          </CardContent>
        </Card>

        {/* ------------------------------------------------------------------------------Lot Size Details */}
        <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Lot Size Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border">
                <thead className="text-xs uppercase bg-gray-100 border-b">
                  <tr>
                    <th className="py-2 px-4 font-medium border-r">Category</th>
                    <th className="py-2 px-4 font-medium border-r text-right">Lots</th>
                    <th className="py-2 px-4 font-medium border-r text-right">Shares</th>
                    <th className="py-2 px-4 font-medium text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {ipoData.lotSizeDetails?.map((lot, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4 border-r">{lot.category}</td>
                      <td className="py-2 px-4 border-r text-right">{lot.lots}</td>
                      <td className="py-2 px-4 border-r text-right">{lot.shares}</td>
                      <td className="py-2 px-4 text-right">{lot.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        {ipoData.subscriptionStatus && (
          <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
            <CardHeader>
              <CardTitle>Subscription Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border">
                  <thead className="text-xs uppercase bg-gray-100 border-b">
                    <tr>
                      <th className="py-2 px-4 font-medium border-r">Category</th>
                      <th className="py-2 px-4 font-medium border-r text-right">Subscription Times (x)</th>
                      <th className="py-2 px-4 font-medium border-r text-right">Shares Offered</th>
                      <th className="py-2 px-4 font-medium text-right">Shares Bid For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(ipoData.subscriptionStatus).map(([key, value]) => (
                      <tr key={key} className="border-b">
                        <td className="py-2 px-4 border-r">
                          {key === 'qib'
                            ? 'QIB'
                            : key === 'nii'
                            ? 'NII'
                            : key === 'bNII'
                            ? 'B-NII'
                            : key === 'sNII'
                            ? 'S-NII'
                            : key === 'retail'
                            ? 'Retail'
                            : key === 'total'
                            ? 'Total'
                            : key}{' '}
                          {/* ------------------------------------------------------------------------------Format category names */}
                        </td>
                        <td className="py-2 px-4 text-right border-r">{value.subscriptionTimes}x</td>
                        <td className="py-2 px-4 text-right border-r">{value.sharesOffered}</td>
                        <td className="py-2 px-4 text-right">{value.sharesBidFor}</td>
                      </tr>
                    ))}
                    {/* ------------------------------------------------------------------------------Total Applications Row (if available) */}
                    {ipoData.totalApplications && (
                      <tr className="border-b font-medium">
                        {' '}
                        {/* ------------------------------------------------------------------------------Added font-medium for emphasis */}
                        <td className="py-2 px-4 border-r">Total Applications</td>
                        <td className="py-2 px-4 text-right border-r"></td> {/* Empty cell */}
                        <td className="py-2 px-4 text-right border-r"></td> {/* Empty cell */}
                        <td className="py-2 px-4 text-right">{ipoData.totalApplications}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
        {/* ------------------------------------------------------------------------------Key People */}
        <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Key People</CardTitle>
          </CardHeader>
          <CardContent>
            {renderTable({
              'Lead Managers': ipoData.leadManagers.join(', '),
              Registrar: ipoData.registrar,
            })}
          </CardContent>
        </Card>

        {/* ------------------------------------------------------------------------------Rating */}
        <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Rating</CardTitle>
          </CardHeader>
          <CardContent>
            {renderTable({
              Rating: ipoData.rating,
              'Rating Date': ipoData.ratingDate,
              //   'Rating Instruments': ipoData.ratingInstruments.join(', '),
            })}
          </CardContent>
        </Card>
        {/* ------------------------------------------------------------------------------Contact Details */}
        <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Contact Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p className="font-medium">Company:</p>
              {renderTable(ipoData.companyContactDetails)}
            </div>
            <div className="mt-4">
              <p className="font-medium">Registrar:</p>
              {renderTable(ipoData.registrarContactDetails)}
            </div>
          </CardContent>
        </Card>

        {/* ------------------------------------------------------------------------------Broker Recommendations */}
        {ipoData.brokerRecommendations && (
          <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
            <CardHeader>
              <CardTitle>Broker Recommendations</CardTitle>
            </CardHeader>
            <CardContent> {renderTable(ipoData.brokerRecommendations)}</CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default IPOComponent;
