import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import axios from "axios";
import { logger } from "@repo/logger";

export interface Website {
  id: string;
  name: string;
  url: string;
  ticks: {
    id: string;
    createdAt: string;
    status: string;
    latency: number;
  }[];
}

export function useWebsites() {
  const { getToken } = useAuth();
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState(true);

  async function refreshWebsites() {
    try {
      setLoading(true);
      const token = await getToken();
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/website/list`, { headers: { Authorization: `${token}` } })

      if (response.status != 200) {
        throw new Error('Failed to fetch websites');
      }

      const data = await response.data;
      setWebsites(data);
    } catch (error) {
      logger.error('Error fetching websites:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refreshWebsites();

    const interval = setInterval(() => {
      refreshWebsites();
    }, 10000 * 60 * 1);

    return () => clearInterval(interval);
  }, []);

  return { websites, loading, refreshWebsites };
}
