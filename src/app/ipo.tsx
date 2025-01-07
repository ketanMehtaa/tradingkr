import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import smeData from './sme.json';
import mainBoardIpoData from './mainBoardIpo.json'
import Link from 'next/link';

const IPODashboard = () => {
  // const upcomingIPOs = [
  //   {
  //     name: 'Capital Infra Trust InvIT',
  //     price: '100',
  //     lotSize: '150',
  //     issue: '1,578.00',
  //     opens: '2025-01-07',
  //     closes: '2025-01-09',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Quadrant Future Tek Limited IPO',
  //     price: '290',
  //     lotSize: '50',
  //     issue: '290.00',
  //     opens: '2025-01-07',
  //     closes: '2025-01-09',
  //     Exchange: 'BSE, NSE',
  //     gmp: '37.93',
  //   },
  //   {
  //     name: 'Standard Glass Lining Technology Limited IPO',
  //     price: '140',
  //     lotSize: '107',
  //     issue: '410.05',
  //     opens: '2025-01-06',
  //     closes: '2025-01-08',
  //     Exchange: 'NSE, BSE',
  //     gmp: '69.29',
  //   },
  //   {
  //     name: 'Indo Farm Equipment Limited IPO',
  //     price: '215',
  //     lotSize: '69',
  //     issue: '260.15',
  //     opens: '2024-12-31',
  //     closes: '2025-01-02',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Unimech Aerospace and Manufacturing Limited IPO',
  //     price: '785',
  //     lotSize: '19',
  //     issue: '500.00',
  //     opens: '2024-12-23',
  //     closes: '2024-12-26',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Carraro India Limited IPO',
  //     price: '704',
  //     lotSize: '21',
  //     issue: '1,250.00',
  //     opens: '2024-12-20',
  //     closes: '2024-12-24',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Senores Pharmaceuticals Limited IPO',
  //     price: '391',
  //     lotSize: '38',
  //     issue: '582.11',
  //     opens: '2024-12-20',
  //     closes: '2024-12-24',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Ventive Hospitality Limited IPO',
  //     price: '643',
  //     lotSize: '23',
  //     issue: '1,600.00',
  //     opens: '2024-12-20',
  //     closes: '2024-12-24',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Concord Enviro Systems Limited IPO',
  //     price: '701',
  //     lotSize: '21',
  //     issue: '500.33',
  //     opens: '2024-12-19',
  //     closes: '2024-12-23',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Sanathan Textiles Limited IPO',
  //     price: '321',
  //     lotSize: '46',
  //     issue: '550.00',
  //     opens: '2024-12-19',
  //     closes: '2024-12-23',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Mamata Machinery Limited IPO',
  //     price: '243',
  //     lotSize: '61',
  //     issue: '179.39',
  //     opens: '2024-12-19',
  //     closes: '2024-12-23',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'DAM Capital Advisors Limited IPO',
  //     price: '283',
  //     lotSize: '53',
  //     issue: '840.25',
  //     opens: '2024-12-19',
  //     closes: '2024-12-23',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Transrail Lighting Limited IPO',
  //     price: '432',
  //     lotSize: '34',
  //     issue: '838.91',
  //     opens: '2024-12-19',
  //     closes: '2024-12-23',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'International Gemmological Institute (India) Limited IPO',
  //     price: '417',
  //     lotSize: '35',
  //     issue: '4,225.00',
  //     opens: '2024-12-13',
  //     closes: '2024-12-17',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Inventurus Knowledge Solutions Limited IPO',
  //     price: '1,329',
  //     lotSize: '11',
  //     issue: '2,497.92',
  //     opens: '2024-12-12',
  //     closes: '2024-12-16',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'One Mobikwik Systems Limited IPO',
  //     price: '279',
  //     lotSize: '53',
  //     issue: '572.00',
  //     opens: '2024-12-11',
  //     closes: '2024-12-13',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Sai Life Sciences Limited IPO',
  //     price: '549',
  //     lotSize: '27',
  //     issue: '3,042.62',
  //     opens: '2024-12-11',
  //     closes: '2024-12-13',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Vishal Mega Mart Limited IPO',
  //     price: '78',
  //     lotSize: '190',
  //     issue: '8,000.00',
  //     opens: '2024-12-11',
  //     closes: '2024-12-13',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Property Share Investment Trust SM REIT',
  //     price: '10,50,000',
  //     lotSize: '1',
  //     issue: '352.91',
  //     opens: '2024-12-02',
  //     closes: '2024-12-04',
  //     Exchange: 'BSE',
  //   },
  //   {
  //     name: 'Suraksha Diagnostic Limited IPO',
  //     price: '441',
  //     lotSize: '34',
  //     issue: '846.25',
  //     opens: '2024-11-29',
  //     closes: '2024-12-03',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Enviro Infra Engineers Limited IPO',
  //     price: '148',
  //     lotSize: '101',
  //     issue: '650.43',
  //     opens: '2024-11-22',
  //     closes: '2024-11-26',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'NTPC Green Energy Limited IPO',
  //     price: '108',
  //     lotSize: '138',
  //     issue: '10,000.00',
  //     opens: '2024-11-19',
  //     closes: '2024-11-22',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Zinka Logistics Solution Limited IPO',
  //     price: '273',
  //     lotSize: '54',
  //     issue: '1,114.72',
  //     opens: '2024-11-13',
  //     closes: '2024-11-18',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Niva Bupa Health Insurance Company Limited IPO',
  //     price: '74',
  //     lotSize: '200',
  //     issue: '2,200.00',
  //     opens: '2024-11-07',
  //     closes: '2024-11-11',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'ACME Solar Holdings Limited IPO',
  //     price: '289',
  //     lotSize: '51',
  //     issue: '2,900.00',
  //     opens: '2024-11-06',
  //     closes: '2024-11-08',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Swiggy Limited IPO',
  //     price: '390',
  //     lotSize: '38',
  //     issue: '11,327.43',
  //     opens: '2024-11-06',
  //     closes: '2024-11-08',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Sagility India Limited IPO',
  //     price: '30',
  //     lotSize: '500',
  //     issue: '2,106.60',
  //     opens: '2024-11-05',
  //     closes: '2024-11-07',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Afcons Infrastructure Limited IPO',
  //     price: '463',
  //     lotSize: '32',
  //     issue: '5,430.00',
  //     opens: '2024-10-25',
  //     closes: '2024-10-29',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Godavari Biorefineries Limited IPO',
  //     price: '352',
  //     lotSize: '42',
  //     issue: '554.75',
  //     opens: '2024-10-23',
  //     closes: '2024-10-25',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Deepak Builders & Engineers India Limited IPO',
  //     price: '203',
  //     lotSize: '73',
  //     issue: '260.04',
  //     opens: '2024-10-21',
  //     closes: '2024-10-23',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Waaree Energies Limited IPO',
  //     price: '1,503',
  //     lotSize: '9',
  //     issue: '4,321.44',
  //     opens: '2024-10-21',
  //     closes: '2024-10-23',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Hyundai Motor India Limited IPO',
  //     price: '1,960',
  //     lotSize: '7',
  //     issue: '27,870.16',
  //     opens: '2024-10-15',
  //     closes: '2024-10-17',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Garuda Construction and Engineering Limited IPO',
  //     price: '95',
  //     lotSize: '157',
  //     issue: '264.10',
  //     opens: '2024-10-08',
  //     closes: '2024-10-10',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Diffusion Engineers Limited IPO',
  //     price: '168',
  //     lotSize: '88',
  //     issue: '158.00',
  //     opens: '2024-09-26',
  //     closes: '2024-09-30',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'KRN Heat Exchanger and Refrigeration Limited IPO',
  //     price: '220',
  //     lotSize: '65',
  //     issue: '341.95',
  //     opens: '2024-09-25',
  //     closes: '2024-09-27',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Manba Finance Limited IPO',
  //     price: '120',
  //     lotSize: '125',
  //     issue: '150.84',
  //     opens: '2024-09-23',
  //     closes: '2024-09-25',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Northern Arc Capital Limited IPO',
  //     price: '263',
  //     lotSize: '57',
  //     issue: '777.00',
  //     opens: '2024-09-16',
  //     closes: '2024-09-19',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Arkade Developers Limited IPO',
  //     price: '128',
  //     lotSize: '110',
  //     issue: '410.00',
  //     opens: '2024-09-16',
  //     closes: '2024-09-19',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Western Carriers (India) Limited IPO',
  //     price: '172',
  //     lotSize: '87',
  //     issue: '492.88',
  //     opens: '2024-09-13',
  //     closes: '2024-09-19',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'P N Gadgil Jewellers Limited IPO',
  //     price: '480',
  //     lotSize: '31',
  //     issue: '1,100.00',
  //     opens: '2024-09-10',
  //     closes: '2024-09-12',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Kross Limited IPO',
  //     price: '240',
  //     lotSize: '62',
  //     issue: '500.00',
  //     opens: '2024-09-09',
  //     closes: '2024-09-11',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Tolins Tyres Limited IPO',
  //     price: '226',
  //     lotSize: '66',
  //     issue: '230.00',
  //     opens: '2024-09-09',
  //     closes: '2024-09-11',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Bajaj Housing Finance Limited IPO',
  //     price: '70',
  //     lotSize: '214',
  //     issue: '6,560.00',
  //     opens: '2024-09-09',
  //     closes: '2024-09-11',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Shree Tirupati Balajee Agro Trading Company Limited IPO',
  //     price: '83',
  //     lotSize: '180',
  //     issue: '169.65',
  //     opens: '2024-09-05',
  //     closes: '2024-09-09',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Gala Precision Engineering Limited IPO',
  //     price: '529',
  //     lotSize: '28',
  //     issue: '167.93',
  //     opens: '2024-09-02',
  //     closes: '2024-09-04',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Baazar Style Retail Limited IPO',
  //     price: '389',
  //     lotSize: '38',
  //     issue: '834.68',
  //     opens: '2024-08-30',
  //     closes: '2024-09-03',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'ECOS (India) Mobility & Hospitality Limited IPO',
  //     price: '334',
  //     lotSize: '44',
  //     issue: '601.20',
  //     opens: '2024-08-28',
  //     closes: '2024-08-30',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Premier Energies Limited IPO',
  //     price: '450',
  //     lotSize: '33',
  //     issue: '2,830.40',
  //     opens: '2024-08-27',
  //     closes: '2024-08-29',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Orient Technologies Limited IPO',
  //     price: '206',
  //     lotSize: '72',
  //     issue: '214.76',
  //     opens: '2024-08-21',
  //     closes: '2024-08-23',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Interarch Building Products Limited IPO',
  //     price: '900',
  //     lotSize: '16',
  //     issue: '600.29',
  //     opens: '2024-08-19',
  //     closes: '2024-08-21',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Saraswati Saree Depot Limited IPO',
  //     price: '160',
  //     lotSize: '90',
  //     issue: '160.01',
  //     opens: '2024-08-12',
  //     closes: '2024-08-14',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Unicommerce eSolutions Limited IPO',
  //     price: '108',
  //     lotSize: '138',
  //     issue: '276.57',
  //     opens: '2024-08-06',
  //     closes: '2024-08-08',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Brainbees Solutions Limited IPO',
  //     price: '465',
  //     lotSize: '32',
  //     issue: '4,193.73',
  //     opens: '2024-08-06',
  //     closes: '2024-08-08',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Ola Electric Mobility Limited IPO',
  //     price: '76',
  //     lotSize: '195',
  //     issue: '6,145.56',
  //     opens: '2024-08-02',
  //     closes: '2024-08-06',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Ceigall India Limited IPO',
  //     price: '401',
  //     lotSize: '37',
  //     issue: '1,252.66',
  //     opens: '2024-08-01',
  //     closes: '2024-08-05',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Akums Drugs and Pharmaceuticals Limited IPO',
  //     price: '679',
  //     lotSize: '22',
  //     issue: '1,856.74',
  //     opens: '2024-07-30',
  //     closes: '2024-08-01',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Sanstar Limited IPO',
  //     price: '95',
  //     lotSize: '150',
  //     issue: '510.15',
  //     opens: '2024-07-19',
  //     closes: '2024-07-23',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Bansal Wire Industries Limited IPO',
  //     price: '256',
  //     lotSize: '58',
  //     issue: '745.00',
  //     opens: '2024-07-03',
  //     closes: '2024-07-05',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Emcure Pharmaceuticals Limited IPO',
  //     price: '1,008',
  //     lotSize: '14',
  //     issue: '1,952.03',
  //     opens: '2024-07-03',
  //     closes: '2024-07-05',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Vraj Iron and Steel Limited IPO',
  //     price: '207',
  //     lotSize: '72',
  //     issue: '171.00',
  //     opens: '2024-06-26',
  //     closes: '2024-06-28',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Allied Blenders and Distillers Limited IPO',
  //     price: '281',
  //     lotSize: '53',
  //     issue: '1,500.00',
  //     opens: '2024-06-25',
  //     closes: '2024-06-27',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Stanley Lifestyles Limited IPO',
  //     price: '369',
  //     lotSize: '40',
  //     issue: '537.02',
  //     opens: '2024-06-21',
  //     closes: '2024-06-25',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Akme Fintrade India Ltd IPO',
  //     price: '120',
  //     lotSize: '125',
  //     issue: '132.00',
  //     opens: '2024-06-19',
  //     closes: '2024-06-21',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'DEE Development Engineers Limited IPO',
  //     price: '203',
  //     lotSize: '73',
  //     issue: '418.01',
  //     opens: '2024-06-19',
  //     closes: '2024-06-21',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Le Travenues Technology Ltd IPO',
  //     price: '93',
  //     lotSize: '161',
  //     issue: '740.10',
  //     opens: '2024-06-10',
  //     closes: '2024-06-12',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Kronox Lab Sciences Limited IPO',
  //     price: '136',
  //     lotSize: '110',
  //     issue: '130.15',
  //     opens: '2024-06-03',
  //     closes: '2024-06-05',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Awfis Space Solutions Limited IPO',
  //     price: '383',
  //     lotSize: '39',
  //     issue: '598.93',
  //     opens: '2024-05-22',
  //     closes: '2024-05-27',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Go Digit General Insurance Limited IPO',
  //     price: '272',
  //     lotSize: '55',
  //     issue: '2,614.65',
  //     opens: '2024-05-15',
  //     closes: '2024-05-17',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Aadhar Housing Finance Limited IPO',
  //     price: '315',
  //     lotSize: '47',
  //     issue: '3,000.00',
  //     opens: '2024-05-08',
  //     closes: '2024-05-10',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'TBO Tek Limited IPO',
  //     price: '920',
  //     lotSize: '16',
  //     issue: '1,550.81',
  //     opens: '2024-05-08',
  //     closes: '2024-05-10',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Indegene Limited IPO',
  //     price: '452',
  //     lotSize: '33',
  //     issue: '1,841.76',
  //     opens: '2024-05-06',
  //     closes: '2024-05-08',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'JNK India Limited IPO',
  //     price: '415',
  //     lotSize: '36',
  //     issue: '649.47',
  //     opens: '2024-04-23',
  //     closes: '2024-04-25',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Vodafone Idea Limited FPO',
  //     price: '11',
  //     lotSize: '1,298',
  //     issue: '18,000.00',
  //     opens: '2024-04-18',
  //     closes: '2024-04-22',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Bharti Hexacom Limited IPO',
  //     price: '570',
  //     lotSize: '26',
  //     issue: '4,275.00',
  //     opens: '2024-04-03',
  //     closes: '2024-04-05',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'SRM Contractors Limited IPO',
  //     price: '210',
  //     lotSize: '70',
  //     issue: '130.20',
  //     opens: '2024-03-26',
  //     closes: '2024-03-28',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Krystal Integrated Services Limited IPO',
  //     price: '715',
  //     lotSize: '20',
  //     issue: '300.13',
  //     opens: '2024-03-14',
  //     closes: '2024-03-18',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Popular Vehicles & Services Limited IPO',
  //     price: '295',
  //     lotSize: '50',
  //     issue: '601.55',
  //     opens: '2024-03-12',
  //     closes: '2024-03-14',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Gopal Snacks Limited IPO',
  //     price: '401',
  //     lotSize: '37',
  //     issue: '650.00',
  //     opens: '2024-03-06',
  //     closes: '2024-03-11',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'JG Chemicals Limited IPO',
  //     price: '221',
  //     lotSize: '67',
  //     issue: '251.19',
  //     opens: '2024-03-05',
  //     closes: '2024-03-07',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'R K SWAMY Limited IPO',
  //     price: '288',
  //     lotSize: '50',
  //     issue: '423.56',
  //     opens: '2024-03-04',
  //     closes: '2024-03-06',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Mukka Proteins Limited IPO',
  //     price: '28',
  //     lotSize: '535',
  //     issue: '224.00',
  //     opens: '2024-02-29',
  //     closes: '2024-03-04',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Bharat Highways Infrastructure Investment Trust InvIT',
  //     price: '100',
  //     lotSize: '150',
  //     issue: '2,500.00',
  //     opens: '2024-02-28',
  //     closes: '2024-03-01',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Exicom Tele-Systems Limited IPO',
  //     price: '142',
  //     lotSize: '100',
  //     issue: '429.00',
  //     opens: '2024-02-27',
  //     closes: '2024-02-29',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Platinum Industries Limited IPO',
  //     price: '171',
  //     lotSize: '87',
  //     issue: '235.32',
  //     opens: '2024-02-27',
  //     closes: '2024-02-29',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'GPT Healthcare Limited IPO',
  //     price: '186',
  //     lotSize: '80',
  //     issue: '525.14',
  //     opens: '2024-02-22',
  //     closes: '2024-02-26',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Juniper Hotels Limited IPO',
  //     price: '360',
  //     lotSize: '40',
  //     issue: '1,800.00',
  //     opens: '2024-02-21',
  //     closes: '2024-02-23',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Vibhor Steel Tubes Limited IPO',
  //     price: '151',
  //     lotSize: '99',
  //     issue: '72.17',
  //     opens: '2024-02-13',
  //     closes: '2024-02-15',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Entero Healthcare Solutions Limited IPO',
  //     price: '1,258',
  //     lotSize: '11',
  //     issue: '1,600.00',
  //     opens: '2024-02-09',
  //     closes: '2024-02-13',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Capital Small Finance Bank Limited IPO',
  //     price: '468',
  //     lotSize: '32',
  //     issue: '523.07',
  //     opens: '2024-02-07',
  //     closes: '2024-02-09',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Jana Small Finance Bank Limited IPO',
  //     price: '414',
  //     lotSize: '36',
  //     issue: '570.00',
  //     opens: '2024-02-07',
  //     closes: '2024-02-09',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Rashi Peripherals Limited IPO',
  //     price: '311',
  //     lotSize: '48',
  //     issue: '600.00',
  //     opens: '2024-02-07',
  //     closes: '2024-02-09',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Apeejay Surrendra Park Hotels Limited IPO',
  //     price: '155',
  //     lotSize: '96',
  //     issue: '920.00',
  //     opens: '2024-02-05',
  //     closes: '2024-02-07',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'BLS E-Services Limited IPO',
  //     price: '135',
  //     lotSize: '108',
  //     issue: '310.91',
  //     opens: '2024-01-30',
  //     closes: '2024-02-01',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Nova AgriTech Limited IPO',
  //     price: '41',
  //     lotSize: '365',
  //     issue: '143.81',
  //     opens: '2024-01-23',
  //     closes: '2024-01-25',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'EPACK Durable Limited IPO',
  //     price: '230',
  //     lotSize: '65',
  //     issue: '640.05',
  //     opens: '2024-01-19',
  //     closes: '2024-01-24',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Medi Assist Healthcare Services Limited IPO',
  //     price: '418',
  //     lotSize: '35',
  //     issue: '1,171.58',
  //     opens: '2024-01-15',
  //     closes: '2024-01-17',
  //     Exchange: 'BSE, NSE',
  //   },
  //   {
  //     name: 'Jyoti CNC Automation Limited IPO',
  //     price: '331',
  //     lotSize: '45',
  //     issue: '1,000.00',
  //     opens: '2024-01-09',
  //     closes: '2024-01-11',
  //     Exchange: 'BSE, NSE',
  //   },
  // ];
  // const SmeIpo = [
  //   {
  //     name: 'Avax Apparels And Ornaments Limited IPO',
  //     opens: '2025-01-07',
  //     closes: '2025-01-09',
  //     listing: '2025-01-14',
  //     leadManager: 'SKI Capital Services',
  //     marketMaker: 'Giriraj Stock Broking',
  //     price: '70',
  //     issue: '1.92',
  //     lotSize: '2000',
  //     exchange: 'BSE SME',
  //   },
  //   {
  //     name: 'Delta Autocorp Limited IPO',
  //     opens: '2025-01-07',
  //     closes: '2025-01-09',
  //     listing: '2025-01-14',
  //     leadManager: 'GYR Capital Advisors',
  //     marketMaker: 'Spread X Securities',
  //     price: '123.00 to 130.00',
  //     issue: '54.6',
  //     lotSize: '1000',
  //     exchange: 'NSE SME',
  //   },
  //   {
  //     name: 'B.R.Goyal Infrastructure Limited IPO',
  //     opens: '2025-01-07',
  //     closes: '2025-01-09',
  //     listing: '2025-01-14',
  //     leadManager: 'Beeline Capital',
  //     marketMaker: '',
  //     price: '128.00 to 135.00',
  //     issue: '85.21',
  //     lotSize: '1000',
  //     exchange: 'BSE SME',
  //   },
  //   {
  //     name: 'Indobell Insulation Limited IPO',
  //     opens: '2025-01-06',
  //     closes: '2025-01-08',
  //     listing: '2025-01-13',
  //     leadManager: 'Finshore',
  //     marketMaker: 'Black Fox Financial',
  //     price: '46',
  //     issue: '10.14',
  //     lotSize: '3000',
  //     exchange: 'BSE SME',
  //   },
  //   {
  //     name: 'Fabtech Technologies Cleanrooms Limited IPO',
  //     opens: '2025-01-03',
  //     closes: '2025-01-07',
  //     listing: '2025-01-10',
  //     leadManager: 'Vivro Financial',
  //     marketMaker: 'Rikhav Securities.',
  //     price: '85',
  //     issue: '27.74',
  //     lotSize: '1600',
  //     exchange: 'BSE SME',
  //   },
  //   {
  //     name: 'Davin Sons Retail Limited IPO',
  //     opens: '2025-01-02',
  //     closes: '2025-01-06',
  //     listing: '2025-01-09',
  //     leadManager: 'Navigant Corporate',
  //     marketMaker: 'Aftertrade Broking',
  //     price: '55',
  //     issue: '8.78',
  //     lotSize: '2000',
  //     exchange: 'BSE SME',
  //   },
  //   {
  //     name: 'Parmeshwar Metal Limited IPO',
  //     opens: '2025-01-02',
  //     closes: '2025-01-06',
  //     listing: '2025-01-09',
  //     leadManager: 'Beeline Capital',
  //     marketMaker: 'Spread X Securities',
  //     price: '61',
  //     issue: '24.74',
  //     lotSize: '2000',
  //     exchange: 'BSE SME',
  //   },
  //   {
  //     name: 'Leo Dry Fruits and Spices Trading Ltd IPO',
  //     opens: '2025-01-01',
  //     closes: '2025-01-03',
  //     listing: '2025-01-08',
  //     leadManager: 'Shreni Shares',
  //     marketMaker: 'Rikhav Securities',
  //     price: '52',
  //     issue: '25.12',
  //     lotSize: '2000',
  //     exchange: 'BSE SME',
  //   },
  // ];
  const mainIpo = mainBoardIpoData;
  const SmeIpo = smeData;
  const sortedIpos = [...SmeIpo].sort((ipo1, ipo2) => {
    const date1 = new Date(ipo1.ipoCloseDate);
    const date2 = new Date(ipo2.ipoCloseDate);
  
    // Handle invalid dates (important!)
    if (isNaN(date1.getTime()) && isNaN(date2.getTime())) return 0; // Both invalid
    if (isNaN(date1.getTime())) return 1; // date1 is invalid, put it at the end
    if (isNaN(date2.getTime())) return -1; // date2 is invalid, put it at the end
  
    return date2.getTime() - date1.getTime(); // Descending order: date2 - date1
  });
  
  
  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl font-bold mb-6"> IPO Dashboard</h1>

      <Tabs defaultValue="Main Board" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="Main Board">Main Board IPOs</TabsTrigger>
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
                      Issue Size (Cr)
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
                      Subscription %
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mainIpo.map((ipo) => (
                    <tr key={ipo.name} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-2 py-1 md:px-6 md:py-3 font-medium">
                        <Link href={`/mainBoardIpo/${encodeURIComponent(ipo.name)}`}>
                          <span className="cursor-pointer">{ipo.name}</span>
                        </Link>
                      </td>
                      <td className="px-2 py-1 md:px-6 md:py-3">{ipo.priceBand}</td>
                      <td className="px-2 py-1 md:px-6 md:py-3">{ipo.lotSize}</td>
                      <td className="px-2 py-1 md:px-6 md:py-3">{ipo.issueSize}</td>
                      <td className="px-2 py-1 md:px-6 md:py-3">{ipo.ipoOpenDate}</td>
                      <td className="px-2 py-1 md:px-6 md:py-3">{ipo.ipoCloseDate}</td>
                      <td className="px-2 py-1 md:px-6 md:py-3">{ipo.gmp || '-'}</td>
                      {/* <td className="px-2 py-1 md:px-6 md:py-3">
                        {ipo.subscriptionStatus?.categories && ipo?.subscriptionStatus?.categories.length > 0
                          ? ipo.subscriptionStatus?.categories.find(
                              (category) => category.investorCategory === 'Total'
                            )?.subscriptionTimes || '-'
                          : '-'}
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

        <TabsContent value="SME">
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
                        Issue Size (Cr)
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
                        Subscription %
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedIpos.map((ipo) => (
                      <tr key={ipo.name} className="bg-white border-b hover:bg-gray-50">
                        <td className="px-2 py-1 md:px-6 md:py-3 font-medium">
                          <Link href={`/ipo/${encodeURIComponent(ipo.name)}`}>
                            <span className="cursor-pointer">{ipo.name}</span>
                          </Link>
                        </td>
                        <td className="px-2 py-1 md:px-6 md:py-3">{ipo.priceBand}</td>
                        <td className="px-2 py-1 md:px-6 md:py-3">{ipo.lotSize}</td>
                        <td className="px-2 py-1 md:px-6 md:py-3">{ipo.issueSize}</td>
                        <td className="px-2 py-1 md:px-6 md:py-3">{ipo.ipoOpenDate}</td>
                        <td className="px-2 py-1 md:px-6 md:py-3">{ipo.ipoCloseDate}</td>
                        <td className="px-2 py-1 md:px-6 md:py-3">{ipo.gmp || '-'}</td>
                        <td className="px-2 py-1 md:px-6 md:py-3">
                          {ipo.subscriptionStatus?.categories && ipo.subscriptionStatus.categories.length > 0
                            ? ipo.subscriptionStatus.categories.find(
                                (category) => category.investorCategory === 'Total'
                              )?.subscriptionTimes || '-'
                            : '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

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
