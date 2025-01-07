import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ipodata from '../../sme.json'; // Import your JSON data

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
        {/* Added table-fixed */}
        <thead className="text-xs uppercase bg-gray-100">
          <tr>
            <th className="w-1/2 py-2 px-4 font-medium">Field</th> {/* Added w-1/2 */}
            <th className="w-1/2 py-2 px-4 font-medium">Value</th> {/* Added w-1/2 */}
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key} className="border-b">
              <td className="w-1/2 py-2 px-4 font-medium">{key}</td> {/* Added w-1/2 */}
              <td className="w-1/2 py-2 px-4">{value || '-'}</td> {/* Added w-1/2 */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{ipoData.name}</h1>
        {/* <p className="text-gray-600">{ipoData.listingAt}</p> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Responsive grid */}
        {/* ------------------------------------------------------------------------------Basic Details */}
        <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Basic Details</CardTitle>
          </CardHeader>
          <CardContent>
            {renderTable({
              'Issue Size': ipoData.issueSize,
              'Fresh Issue Shares': ipoData.freshIssueShares,
              'Offer For Sale Shares': ipoData.offerForSaleShares,
              'IPO Open Date': ipoData.ipoOpenDate,
              'IPO Close Date': ipoData.ipoCloseDate,
              'Allotment Date': ipoData.allotmentDate,
              'Listing Date': ipoData.listingDate,
              'Listing At': ipoData.listingAt,
              'Price Band': ipoData.priceBand,
              'Face Value': ipoData.faceValue,
              'Lot Size': ipoData.lotSize,
              'Minimum Investment (Retail)': ipoData.minimumInvestmentRetail,
              'Minimum Investment (HNI)': ipoData.minimumInvestmentHNI,
            })}
          </CardContent>
        </Card>
        {/* --------------------------------------------------------------------------------Holding and Portion Details */}
        <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Holding & Portion Details</CardTitle>
          </CardHeader>
          <CardContent>
            {renderTable({
              'Pre-Issue Promoter Holding': ipoData.preIssuePromoterHolding,
              'Post-Issue Promoter Holding': ipoData.postIssuePromoterHolding,
              'Market Maker Portion': ipoData.marketMakerPortion,
              'QIB Portion': ipoData.qibPortion,
              'NII Portion': ipoData.niiPortion,
              'RII Portion': ipoData.riiPortion,
              'Anchor Investor Portion': ipoData.anchorInvestorPortion,
              'Anchor Bid Date': ipoData.anchorBidDate,
              'Anchor Portion Size': ipoData.anchorPortionSize,
              'Anchor Lockin (30 Days)': ipoData.anchorLockin30Days,
              'Anchor Lockin (90 Days)': ipoData.anchorLockin90Days,
            })}
          </CardContent>
        </Card>
        {/* -------------------------------------------------------------------------------Issue Details */}
        <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Issue Details</CardTitle>
          </CardHeader>
          <CardContent>
            {renderTable({
              'Total Shares Offered': ipoData.totalSharesOffered,
              'Fresh Issue Amount': ipoData.freshIssueAmount,
              'Offer For Sale Amount': ipoData.offerForSaleAmount,
              'Issue Type': ipoData.issueType,
              'Pre-Issue Share Holding': ipoData.preIssueShareHolding,
              'Post-Issue Share Holding': ipoData.postIssueShareHolding,
            })}
          </CardContent>
        </Card>
        {/* ---------------------------------------------------------------------------------Key People */}
        <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Key People</CardTitle>
          </CardHeader>
          <CardContent>
            {renderTable({
              Promoters: ipoData.promoters?.join(', ') || '-',
              'Lead Manager': ipoData.leadManager,
              Registrar: ipoData.registrar,
              'Market Maker': ipoData.marketMaker,
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
              <span className="font-semibold">About:</span> {ipoData.about}
            </div>
            {ipoData.products && (
              <div>
                <span className="font-semibold">Products:</span> {ipoData.products.join(', ')}
              </div>
            )}
            {ipoData.companyContactDetails && (
              <div>
                <h4 className="font-semibold">Contact Details:</h4>
                {renderTable(ipoData.companyContactDetails)}
              </div>
            )}
          </CardContent>
        </Card>
        {/* -----------------------------------------------------------------------------------Financial Performance */}
        {/* {(ipoData.revenueFY24 || ipoData.revenueFY23 || ipoData.profitAfterTaxFY24 || ipoData.profitAfterTaxFY23) && (
          <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
            <CardHeader>
              <CardTitle>Financial Performance</CardTitle>
            </CardHeader>
            <CardContent>
              {renderTable({
                'Revenue FY24': ipoData?.revenueFY24,
                'Revenue FY23': ipoData.revenueFY23,
                'Profit After Tax FY24': ipoData.profitAfterTaxFY24,
                'Profit After Tax FY23': ipoData.profitAfterTaxFY23,
              })}
            </CardContent>
          </Card>
        )} */}
        {/* ----------------------------------------------------------------------------------Subscription Status */}
        {ipoData.subscriptionStatus && (
          <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
            <CardHeader>
              <CardTitle>Subscription Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border">
                  <thead className="text-xs uppercase bg-gray-100 ">
                    <tr>
                      <th className="py-2 px-4 font-medium">Category</th>
                      <th className="py-2 px-4 font-medium text-right">Shares Offered</th>
                      <th className="py-2 px-4 font-medium text-right">Subscription Times (x)</th>
                      <th className="py-2 px-4 font-medium text-right">Total Amount (Cr)</th>
                      <th className="py-2 px-4 font-medium text-right">Total Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipoData.subscriptionStatus.categories.map((category, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 px-4">{category.investorCategory}</td>
                        <td className="py-2 px-4 text-right">{category.sharesOffered}</td>
                        <td className="py-2 px-4 text-right">{category.subscriptionTimes}x</td>
                        <td className="py-2 px-4 text-right">{category.totalAmountCr || '-'}</td>
                        <td className="py-2 px-4 text-right">{category.totalApplications || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
        {/* -----------------------------------------------------------------------------------Timeline */}
        {/* <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            {renderTable({
              'UPI Mandate Confirmation Cutoff Time': ipoData.upiMandateConfirmationCutoffTime,
              'Refunds Initiation Date': ipoData.refundsInitiationDate,
              'Credit of Shares to Demat': ipoData.creditOfSharesToDemat,
              'Anchor Bid Date': ipoData.anchorBidDate,
            })}
          </CardContent>
        </Card> */}
        {/* --------------------------------------------------------------------------------------GMP & Subscription */}
        <Card className="mb-6 bg-slate-50 shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>GMP & Subscription</CardTitle>
          </CardHeader>
          <CardContent>
            {renderTable({
              GMP: ipoData.gmp,
              'Subscription (% - Total)':
                ipoData.subscriptionStatus?.categories?.find((cat) => cat.investorCategory === 'Total')
                  ?.subscriptionTimes + 'x',
            })}
          </CardContent>
        </Card>
        {/* ----------------------------------------------------------------------------------------Key Performance Indicators */}
        {ipoData.keyPerformanceIndicators && (
          <Card className="mb-6 bg-slate-50 shadow-md rounded-lg">
            <CardHeader>
              <CardTitle>Key Performance Indicators</CardTitle>
            </CardHeader>
            <CardContent>{renderTable(ipoData.keyPerformanceIndicators)}</CardContent>
          </Card>
        )}
        {/*--------------------------------------------------------------------------------------------- EPS & PE Ratio */}
        {ipoData.eps && ipoData.peRatio && (
          <Card className="mb-6 bg-slate-50 shadow-md rounded-lg">
            <CardHeader>
              <CardTitle>EPS & PE Ratio</CardTitle>
            </CardHeader>
            <CardContent>
              {renderTable({
                'EPS (Pre-IPO)': ipoData.eps.preIPO,
                'EPS (Post-IPO)': ipoData.eps.postIPO,
                'PE Ratio (Pre-IPO)': ipoData.peRatio.preIPO,
                'PE Ratio (Post-IPO)': ipoData.peRatio.postIPO,
              })}
            </CardContent>
          </Card>
        )}
        {/*------------------------------------------------------------------------------------------------- Objects of the Issue */}
        {ipoData.objectsOfIssue && (
          <Card className="mb-6 bg-slate-50 shadow-md rounded-lg">
            <CardHeader>
              <CardTitle>Objects of the Issue</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                {ipoData.objectsOfIssue.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
        {/* -------------------------------------------------------------------------------------------------Broker Recommendations */}
        {ipoData.brokerRecommendations && (
          <Card className="mb-6 bg-slate-50 shadow-md rounded-lg">
            <CardHeader>
              <CardTitle>Broker Recommendations</CardTitle>
            </CardHeader>
            <CardContent>{renderTable(ipoData.brokerRecommendations)}</CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default IPOComponent;
