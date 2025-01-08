// IPOComponent.jsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // Replace with your actual UI library
import ipoData from '../../mainBoardIpo.json'; // Update path if needed
import { IPOData } from '@/app/mainIpoInterface';
import ShareButtons from '@/app/share';

const IPOComponent = ({ params }: { params: { name: string } }) => {
  const { name } = params;
  // const decodedSymbol = decodeURIComponent(symbol);

  // Access the IPO data using the symbol as the key
  const typedIPOData = ipoData as IPOData;
  const ipo = typedIPOData[name];
  console.log('kkkkk', ipo);
  if (!ipo) {
    return <div className="container mx-auto px-4 py-8">IPO data not found for {name}</div>;
  }
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      // Handle invalid date strings (e.g., return original string, throw error, etc.)
      console.error('Invalid date string:', dateString);
      return dateString; // Or throw an error, or return a default value
    }

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const renderTable = (data: Record<string, any>, rowClasses: Record<string, string> = {}) => (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed text-sm text-left">
        {/* <thead className="text-xs uppercase bg-gray-100">
          <tr>
            <th className="w-1/2 py-2 px-4 font-medium">Field</th>
            <th className="w-1/2 py-2 px-4 font-medium">Value</th>
          </tr>
        </thead> */}
        <tbody>
          {Object.entries(data).map(([key, value], index) => (
            <tr key={key} className={`border-b ${rowClasses[key] || ''}`}>
              <td className={`w-1/2 py-2 px-4 font-medium ${index % 2 === 1 ? 'bg-[#F8F8FC]' : ''}`}>{key}</td>
              <td className={`w-1/2 py-2 px-4 ${index % 2 === 1 ? 'bg-[#F8F8FC]' : ''}`}>{value || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-4">{ipo.ipoName}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2  p-4 rounded-lg  z-50">
          <ShareButtons />
        </div>
        {/*------------------------------------------------------------- Basic Details */}
        <Card className="mb-6 bg-white shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Basic Details</CardTitle>
          </CardHeader>
          <CardContent>
            {renderTable(
              {
                'Issue Size': ipo.financials.issueSize,
                'Fresh Issue': `${ipo.financials.freshIssue.shares} (${ipo.financials.freshIssue.amount})`,
                'Offer for Sale': `${ipo.financials.offerForSale.shares} (${ipo.financials.offerForSale.amount})`,
                'Price Band': ipo.pricing.priceBand,
                Gmp: ipo.gmp,
                'Lot Size': ipo.pricing.lotSize,
                'IPO Open Date': ipo.timeline.ipoOpenDate,
                'IPO Close Date': ipo.timeline.ipoCloseDate,
                'Listing Date': ipo.timeline.listingDate,
                'Listing At': ipo.listing.exchanges.join(', '),
                'Total Shares Offered': ipo.shareDetails.totalSharesOffered,
                'Issue Type': ipo.shareDetails.issueType,
                'Face Value': ipo.pricing.faceValue,
              },
              { Gmp: 'bg-green-200' }
            )}
          </CardContent>
        </Card>

        {/*------------------------------------------------------------- Company Information */}
        <Card className="mb-6 bg-white shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <span className="font-semibold">About:</span> {ipo.about}
            </div>
          </CardContent>
        </Card>

        {/*------------------------------------------------------------- Key Performance Indicators */}
        <Card className="mb-6 bg-white shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Key Performance Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            {renderTable(
              {
                ROE: ipo.financials.keyPerformanceIndicators.roe,
                ROCE: ipo.financials.keyPerformanceIndicators.roce,
                'Debt/Equity': ipo.financials.keyPerformanceIndicators.debtEquity,
                RONW: ipo.financials.keyPerformanceIndicators.ronw,
                'PAT Margin': ipo.financials.keyPerformanceIndicators.patMargin,
                'Price to Book Value': ipo.financials.keyPerformanceIndicators.priceToBookValue,
                'EPS (Pre-IPO)': ipo.financials.keyPerformanceIndicators.eps.preIPO,
                'EPS (Post-IPO)': ipo.financials.keyPerformanceIndicators.eps.postIPO,
                'P/E (Pre-IPO)': ipo.financials.keyPerformanceIndicators.pe.preIPO,
                'P/E (Post-IPO)': ipo.financials.keyPerformanceIndicators.pe.postIPO,
              },
              { 'P/E (Post-IPO)': 'bg-green-200' }
            )}
          </CardContent>
        </Card>

        {/*------------------------------------------------------------- Holding & Portion Details */}
        <Card className="mb-6 bg-white shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Holding & Portion Details</CardTitle>
          </CardHeader>
          <CardContent>
            {renderTable({
              'QIB Portion': ipo.reservation.qib,
              'NII Portion': ipo.reservation.nii,
              'RII Portion': ipo.reservation.rii,
              'Anchor Investor Portion': ipo.reservation.anchorInvestors,
              'Anchor Bid Date': ipo.anchorInvestmentDetails.bidDate,
            })}
          </CardContent>
        </Card>
        {/* Timeline */}
        <Card className="mb-6 bg-white shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            {renderTable({
              'IPO Open Date': formatDate(ipo.timeline.ipoOpenDate),
              'IPO Close Date': formatDate(ipo.timeline.ipoCloseDate),
              'Allotment Date': formatDate(ipo.timeline.allotmentDate),
              'Listing Date': formatDate(ipo.timeline.listingDate),
              'Refunds Initiation Date': formatDate(ipo.timeline.refundsInitiationDate),
              'Credit of Shares to Demat': formatDate(ipo.timeline.creditOfSharesToDemat),
            })}
          </CardContent>
        </Card>

        {/*------------------------------------------------------------- Lot Size Details */}
        <Card className="mb-6 bg-white shadow-md rounded-lg ">
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
                  {Object.entries(ipo.lotSizeDetails).map(([category, details]) => (
                    <tr key={category} className={`border-b ${category === 'retailMin' ? 'bg-green-200' : ''}`}>
                      <td className="py-2 px-4 border-r">{category}</td>
                      <td className="py-2 px-4 border-r text-right">{details.lots}</td>
                      <td className="py-2 px-4 border-r text-right">{details.shares}</td>
                      <td className="py-2 px-4 text-right">{details.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/*------------------------------------------------------------- Subscription Status */}
        {ipo.subscriptionStatus && (
          <Card className="mb-6 bg-white shadow-md rounded-lg ">
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
                    {Object.entries(ipo.subscriptionStatus).map(([key, value]) => (
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
                            : key}
                        </td>
                        <td className={`py-2 px-4 text-right border-r ${key === 'retail' ? 'bg-green-200' : ''}`}>
                          {value.subscriptionTimes}x
                        </td>
                        <td className="py-2 px-4 text-right border-r">{value.sharesOffered}</td>
                        <td className="py-2 px-4 text-right">{value.sharesBidFor}</td>
                      </tr>
                    ))}
                    {ipo.subscriptionStatus.total && (
                      <tr className="border-b font-medium">
                        <td className="py-2 px-4 border-r">Total Applications</td>
                        <td className="py-2 px-4 text-right border-r"></td>
                        <td className="py-2 px-4 text-right border-r"></td>
                        <td className="py-2 px-4 text-right">{ipo.subscriptionStatus.total.totalApplications}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
        {/*------------------------------------------------------------- Financial Data */}
        <Card className="mb-6 bg-white shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Financial Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border">
                <thead className="text-xs uppercase bg-gray-100 border-b">
                  <tr>
                    <th className="py-2 px-4 font-medium border-r">Date</th>
                    <th className="py-2 px-4 font-medium border-r text-right">Revenue (₹ Cr)</th>
                    <th className="py-2 px-4 font-medium border-r text-right">Profit After Tax (₹ Cr)</th>
                    <th className="py-2 px-4 font-medium border-r text-right">Net Worth (₹ Cr)</th>
                    <th className="py-2 px-4 font-medium text-right">Total Borrowing (₹ Cr)</th>
                  </tr>
                </thead>
                <tbody>
                  {ipo.financials.financialsByDate.map((data: any, index: any) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4 border-r">{data.date}</td>
                      <td className="py-2 px-4 border-r text-right">{data.revenue.toFixed(2)}</td>
                      <td className="py-2 px-4 border-r text-right">{data.profitAfterTax.toFixed(2)}</td>
                      <td className="py-2 px-4 border-r text-right">{data.netWorth.toFixed(2)}</td>
                      <td className="py-2 px-4 text-right">{data.totalBorrowing.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-white shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Financial Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border border-collapse">
                {' '}
                {/* Added border-collapse */}
                <thead className="text-xs uppercase bg-gray-100 border-b">
                  <tr>
                    <th className="py-2 px-4 font-medium border border-gray-300">Metric</th>
                    {ipo.financials.financialsByDate.map((data: any) => (
                      <th key={data.date} className="py-2 px-4 font-medium border border-gray-300 text-right">
                        {data.date}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 font-medium border border-gray-300">Revenue (₹ Cr)</td>
                    {ipo.financials.financialsByDate.map((data: any) => (
                      <td key={data.date} className="py-2 px-4 border border-gray-300 text-right">
                        {data.revenue.toFixed(2)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium border border-gray-300">Profit After Tax (₹ Cr)</td>
                    {ipo.financials.financialsByDate.map((data: any) => (
                      <td key={data.date} className="py-2 px-4 border border-gray-300 text-right">
                        {data.profitAfterTax.toFixed(2)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium border border-gray-300">Net Worth (₹ Cr)</td>
                    {ipo.financials.financialsByDate.map((data: any) => (
                      <td key={data.date} className="py-2 px-4 border border-gray-300 text-right">
                        {data.netWorth.toFixed(2)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium border border-gray-300">Total Borrowing (₹ Cr)</td>
                    {ipo.financials.financialsByDate.map((data: any) => (
                      <td key={data.date} className="py-2 px-4 border border-gray-300 text-right">
                        {data.totalBorrowing.toFixed(2)}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/*------------------------------------------------------------- Key People */}
        <Card className="mb-6 bg-white shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Key People</CardTitle>
          </CardHeader>
          <CardContent>
            {renderTable({
              'Lead Managers': ipo.management.leadManagers.join(', '),
              Registrar: ipo.management.registrar,
            })}
          </CardContent>
        </Card>

        {/*------------------------------------------------------------- Contact Details */}
        <Card className="mb-6 bg-white shadow-md rounded-lg ">
          <CardHeader>
            <CardTitle>Contact Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p className="font-medium">Company:</p>
              {renderTable(ipo.contactDetails.company)}
            </div>
            <div className="mt-4">
              <p className="font-medium">Registrar:</p>
              {renderTable(ipo.contactDetails.registrar)}
            </div>
          </CardContent>
        </Card>

        {/*------------------------------------------------------------- Broker Recommendations */}
        {ipo.brokerRecommendations && (
          <Card className="mb-6 bg-white shadow-md rounded-lg ">
            <CardHeader>
              <CardTitle>Broker Recommendations</CardTitle>
            </CardHeader>
            <CardContent>{renderTable(ipo.brokerRecommendations)}</CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default IPOComponent;
