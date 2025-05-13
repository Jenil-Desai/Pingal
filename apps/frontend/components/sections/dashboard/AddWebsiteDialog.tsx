import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addWebsiteSchema, AddWebsiteType } from "@/schemas/addWebsiteSchema";
import { useAuth } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { logger } from "@repo/logger";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type AddWebsiteDialogProps = {
  onOpenChange: (open: boolean) => void;
  refreshWebsites: () => void;
}

export default function AddWebsiteDialog({ onOpenChange, refreshWebsites }: AddWebsiteDialogProps) {
  const { getToken } = useAuth();
  const form = useForm({
    resolver: zodResolver(addWebsiteSchema),
    defaultValues: {
      name: "",
      url: "",
    }
  })

  async function onSubmit(data: AddWebsiteType) {
    const token = await getToken();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/website`, data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );

      if (response.status != 200) {
        toast.error("Failed to add website");
        return;
      }

      toast.success("Website added successfully");
    } catch (error) {
      logger.error("Error adding website:", error);
      toast.error("Failed to add website");
    } finally {
      refreshWebsites();
      onOpenChange(false);
    }
  }

  return (
    <Form {...form}>
      <form className="grid gap-4 py-4" onSubmit={form.handleSubmit(onSubmit)}>
        <DialogHeader>
          <DialogTitle>Add New Website</DialogTitle>
          <DialogDescription>
            Enter the details of the website you want to monitor.
          </DialogDescription>
        </DialogHeader>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-center gap-4">
              <FormLabel className="text-right">Name</FormLabel>
              <FormControl>
                <Input
                  className="col-span-3"
                  placeholder="My Website"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-center gap-4">
              <FormLabel className="text-right">URL</FormLabel>
              <FormControl>
                <Input
                  className="col-span-3"
                  placeholder="https://example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-gradient-to-r from-pingal-lavender to-pingal-neon text-white hover:opacity-90"
          >
            Add Website
          </Button>
        </DialogFooter>
      </form>
    </Form >
  )
}
