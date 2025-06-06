interface ClientTransaction {
  date: string;
  value: number;
  type: string;
}

interface ClientSummary {
  name: string;
  latest_transactions: ClientTransaction[];
}

interface EquityHistory {
  date: string;
  value: number;
}

interface ApiResponse {
  data: {
    advisor_summary: {
      client_count: number;
      total_equity: number;
      average_equity: number;
    };
    clients_summary: ClientSummary[];
    equity_history:EquityHistory[];
    client_count: number;
    total_equity: number;
    average_equity: number;
  };
}

async function fetchApiData(): Promise<ApiResponse> {
  const response = await fetch('https://teste.com/api/data');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  console.log(data);
  return data as ApiResponse;
}


export { fetchApiData };

