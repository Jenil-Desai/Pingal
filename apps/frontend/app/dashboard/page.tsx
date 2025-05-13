"use client";
import AddWebsiteDialog from '@/components/sections/dashboard/AddWebsiteDialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useWebsites } from '@/hooks/useWebsites';

type UptimeStatus = "good" | "bad" | "unknown";

export default function Dashboard() {
  const [selectedWebsite, setSelectedWebsite] = useState<string | null>(null);
  const [isAddWebsiteOpen, setIsAddWebsiteOpen] = useState(false);
  const { websites, refreshWebsites, loading } = useWebsites();

  const handleWebsiteClick = (websiteId: string) => {
    setSelectedWebsite(websiteId === selectedWebsite ? null : websiteId);
  };

  const processedWebsites = useMemo(() => {
    return websites.map(website => {
      // Sort ticks by creation time
      const sortedTicks = [...website.ticks].sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      // Get the most recent 30 minutes of ticks
      const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);
      const recentTicks = sortedTicks.filter(tick =>
        new Date(tick.createdAt) > thirtyMinutesAgo
      );

      // Aggregate ticks into 3-minute windows (10 windows total)
      const windows: UptimeStatus[] = [];

      for (let i = 0; i < 10; i++) {
        const windowStart = new Date(Date.now() - (i + 1) * 3 * 60 * 1000);
        const windowEnd = new Date(Date.now() - i * 3 * 60 * 1000);

        const windowTicks = recentTicks.filter(tick => {
          const tickTime = new Date(tick.createdAt);
          return tickTime >= windowStart && tickTime < windowEnd;
        });

        // Window is considered up if majority of ticks are up
        const upTicks = windowTicks.filter(tick => tick.status === 'Good').length;
        windows[9 - i] = windowTicks.length === 0 ? "unknown" : (upTicks / windowTicks.length) >= 0.5 ? "good" : "bad";
      }

      // Calculate overall status and uptime percentage
      const totalTicks = sortedTicks.length;
      const upTicks = sortedTicks.filter(tick => tick.status === 'Good').length;
      const uptimePercentage = totalTicks === 0 ? 0 : (upTicks / totalTicks) * 100;

      // Get the most recent status
      const currentStatus = windows[windows.length - 1];

      // Format the last checked time
      const lastChecked = sortedTicks[0]
        ? new Date(sortedTicks[0].createdAt).toLocaleTimeString()
        : 'Never';

      return {
        id: website.id,
        name: website.name,
        url: website.url,
        status: currentStatus,
        uptimePercentage,
        lastChecked,
        uptimeTicks: windows,
      };
    });
  }, [websites]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="container mx-auto max-w-6xl py-8 px-4 pt-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold gradient-text">Website Monitoring</h1>
          <Button
            onClick={() => setIsAddWebsiteOpen(true)}
            className="bg-gradient-to-r from-pingal-lavender to-pingal-neon text-white hover:opacity-90"
          >
            <Plus size={18} className="mr-1" /> Add Website
          </Button>
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Monitored Websites</CardTitle>
            <CardDescription>Check the status of your websites</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Status</TableHead>
                  <TableHead>Website</TableHead>
                  <TableHead>Uptime</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {processedWebsites.map((website) => (
                  <React.Fragment key={website.id}>
                    <TableRow
                      className="cursor-pointer hover:bg-card/50"
                      onClick={() => handleWebsiteClick(website.id)}
                    >
                      <TableCell>
                        {website.status === 'good' ? (
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse-soft"></div>
                            <span className="text-green-500">Online</span>
                          </div>
                        ) : website.status === 'unknown' ? (
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                            <span className="text-gray-500">Unknown</span>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                            <span className="text-red-500">Offline</span>
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="font-medium">{website.name}</TableCell>
                      <TableCell>
                        <div className="w-full max-w-[150px]">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Uptime</span>
                            <span className="font-mono">{website.uptimePercentage}%</span>
                          </div>
                          <Progress
                            value={website.uptimePercentage}
                            className={`h-2 ${website.status === 'good' ? 'bg-green-500' : 'bg-red-500'}`}
                          />
                        </div>
                      </TableCell>
                    </TableRow>

                    {selectedWebsite === website.id && (
                      <TableRow>
                        <TableCell colSpan={3} className="bg-card/30 p-4">
                          <div className="space-y-4">
                            <h4 className="text-sm font-medium mb-2">Last 10 Status Checks</h4>
                            <div className="flex gap-1 mt-2">
                              {website.uptimeTicks.map((tick, index) => (
                                <div
                                  key={index}
                                  className={`w-8 h-2 rounded ${tick === 'good' ? 'bg-green-500' : tick === 'bad' ? 'bg-red-500' : 'bg-gray-500'
                                    }`}
                                />
                              ))}
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Add Website Modal */}
      <Dialog open={isAddWebsiteOpen} onOpenChange={setIsAddWebsiteOpen}>
        <DialogContent className="glass-card">
          <AddWebsiteDialog onOpenChange={setIsAddWebsiteOpen} refreshWebsites={refreshWebsites} />
        </DialogContent>
      </Dialog>
    </>
  );
};
