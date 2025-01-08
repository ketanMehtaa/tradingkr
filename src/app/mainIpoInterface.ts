interface FinancialData {
    date: string;
    revenue: number;
    profitAfterTax: number;
    netWorth: number;
    totalBorrowing: number;
}

interface SharesAndAmount {
    shares: string;
    amount: string;
}

interface KeyPerformanceIndicators {
    roe: string;
    roce: string;
    debtEquity: string;
    ronw: string;
    patMargin: number;
    priceToBookValue: number;
    eps: {
        preIPO: number;
        postIPO: number;
    };
    pe: {
        preIPO: number;
        postIPO: number;
    };
}

interface Financials {
    issueSize: string;
    freshIssue: SharesAndAmount;
    offerForSale: SharesAndAmount;
    financialsByDate: FinancialData[];
    keyPerformanceIndicators: KeyPerformanceIndicators;
    marketCap: string;
}

interface Timeline {
    ipoOpenDate: string;
    ipoCloseDate: string;
    allotmentDate: string;
    listingDate: string;
    refundsInitiationDate: string;
    creditOfSharesToDemat: string;
}

interface Listing {
    exchanges: string[];
}

interface MinimumInvestment {
    retail: string;
    sNII: string;
    bNII: string;
}

interface Pricing {
    priceBand: string;
    faceValue: string;
    lotSize: number;
    minimumInvestment: MinimumInvestment;
    listingAt: string;
}

interface ShareDetails {
    totalSharesOffered: string;
    preIssueShareHolding: string;
    postIssueShareHolding: string;
    issueType: string;
}

interface Reservation {
    qib: string;
    nii: string;
    rii: string;
    anchorInvestors: string;
}

interface AnchorInvestmentDetails {
    bidDate: string;
    amount: string;
    anchorLockin30Days: string;
    anchorLockin90Days: string;
}

interface PromoterHolding {
    preIssue: string;
    postIssue: string | null;
}

interface Management {
    leadManagers: string[];
    registrar: string;
}

interface LotSizeDetails {
    retailMin: { lots: number; shares: number; amount: string };
    retailMax: { lots: number; shares: number; amount: string };
    SHNIMin: { lots: number; shares: number; amount: string };
    SHNIMax: { lots: number; shares: number; amount: string };
    BHNIMin: { lots: number; shares: number; amount: string };
}


interface ContactDetails {
    company: {
        name: string;
        address: string;
        phone: string;
        email: string;
        website: string;
    };
    registrar: {
        name: string;
        phone: string[];
        email: string;
        website: string;
    };
}

interface BrokerRecommendations {
    subscribe: number;
    neutral: number;
    avoid: number;
}


interface SubscriptionData {
    subscriptionTimes: number;
    sharesOffered: number;
    sharesBidFor: number;
}

interface SubscriptionStatus {
    qib: SubscriptionData;
    nii: SubscriptionData;
    bNII: SubscriptionData;
    sNII: SubscriptionData;
    retail: SubscriptionData;
    total: SubscriptionData & { totalApplications: number };
}


export interface IPOData {
    [symbol: string]: {
        symbol: string;
        companyName: string;
        ipoName: string;
        about: string;
        gmp: string;
        financials: any;
        timeline: Timeline;
        listing: Listing;
        pricing: Pricing;
        shareDetails: ShareDetails;
        reservation: Reservation;
        anchorInvestmentDetails: AnchorInvestmentDetails;
        promoters: string[];
        promoterHolding: PromoterHolding;
        upiMandateCutoff: string;
        management: Management;
        ipoObjectives: string[];
        lotSizeDetails: LotSizeDetails;
        contactDetails: ContactDetails;
        brokerRecommendations: BrokerRecommendations;
        subscriptionStatus: SubscriptionStatus;
    };
}