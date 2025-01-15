'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArrowRightIcon,
  MessageCircle,
  Paperclip,
  UserCheck,
} from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(1, {
    message: '请输入您的姓名',
  }),
  email: z.string().email({
    message: '请输入正确的电子邮箱',
  }),
  message: z.string().min(1, {
    message: '请输入反馈信息',
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.success('发送成功', {
      description: `${values.name}先生/女生，我们将在近期联系您，请留意您的邮箱。`,
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4"
      >
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>姓名</FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input placeholder="请输入您的姓名" {...field} />
                    <UserCheck className="absolute right-6" size={24} />
                  </div>
                </FormControl>
                <FormDescription>您的姓名</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </Fade>
        <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>电子邮箱</FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input placeholder="请输入您的电子邮箱" {...field} />
                    <Paperclip className="absolute right-6" size={24} />
                  </div>
                </FormControl>
                <FormDescription>您的电子邮箱</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </Fade>
        <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>反馈信息</FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Textarea placeholder="请输入反馈信息" {...field} />
                    <MessageCircle className="absolute right-6" size={24} />
                  </div>
                </FormControl>
                <FormDescription>反馈信息</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </Fade>
        <Fade direction="up" delay={1000} cascade damping={1e-1} triggerOnce>
          <Button
            type="submit"
            className="flex max-w-[165px] items-center gap-x-1"
          >
            联系我们
            <ArrowRightIcon />
          </Button>
        </Fade>
      </form>
    </Form>
  );
};

export { ContactForm };
