import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import axios from "axios";
import { logger } from "@repo/logger";

export function useWebsites() {
  const { getToken } = useAuth();
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchWebsites() {
    try {
      setLoading(true);
      const token = await getToken();
      const response = await axios.get(`${process.env.BASE_API_URL}/website/list`, { headers: { Authorization: `Bearer ${token}` } })

      if (response.status != 200) {
        throw new Error('Failed to fetch websites');
      }

      const data = await response.data.websites;
      setWebsites(data);
    } catch (error) {
      logger.error('Error fetching websites:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWebsites();

    const interval = setInterval(() => {
      fetchWebsites();
    }, 10000 * 60 * 1);

    return () => clearInterval(interval);
  }, []);

  return { websites, loading };
}
