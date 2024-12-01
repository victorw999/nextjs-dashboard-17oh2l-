import { fetchRevenue } from '@/app/lib/data';

export default async function Customers() {
  const revenue = await fetchRevenue(); 
  return <p>Customers Page</p>;
}