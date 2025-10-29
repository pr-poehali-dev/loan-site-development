import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Index = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const calculateMonthlyPayment = (amount: number, term: number, rate: number) => {
    const monthlyRate = rate / 100 / 12;
    const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) / 
                   (Math.pow(1 + monthlyRate, term) - 1);
    return payment.toFixed(0);
  };

  const creditProducts = [
    { id: 1, name: 'Быстрый займ', rate: 12.9, minAmount: 10000, maxAmount: 300000, minTerm: 3, maxTerm: 12, type: 'loan', color: 'bg-primary' },
    { id: 2, name: 'Потребительский кредит', rate: 9.5, minAmount: 50000, maxAmount: 3000000, minTerm: 12, maxTerm: 84, type: 'credit', color: 'bg-secondary' },
    { id: 3, name: 'Экспресс-заем', rate: 15.9, minAmount: 5000, maxAmount: 100000, minTerm: 1, maxTerm: 6, type: 'loan', color: 'bg-primary' },
    { id: 4, name: 'Рефинансирование', rate: 8.9, minAmount: 100000, maxAmount: 5000000, minTerm: 12, maxTerm: 120, type: 'credit', color: 'bg-secondary' },
    { id: 5, name: 'Кредит наличными', rate: 11.5, minAmount: 30000, maxAmount: 2000000, minTerm: 6, maxTerm: 60, type: 'credit', color: 'bg-secondary' },
  ];

  const monthlyPayment = calculateMonthlyPayment(loanAmount, loanTerm, 12);
  const totalPayment = (parseFloat(monthlyPayment) * loanTerm).toFixed(0);
  const overpayment = (parseFloat(totalPayment) - loanAmount).toFixed(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <nav className="fixed top-0 w-full backdrop-blur-lg bg-background/80 border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="DollarSign" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ФинансПро
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#loans" className="text-foreground/80 hover:text-primary transition-colors">Займы</a>
              <a href="#credits" className="text-foreground/80 hover:text-primary transition-colors">Кредиты</a>
              <a href="#calculator" className="text-foreground/80 hover:text-primary transition-colors">Калькулятор</a>
              <a href="#comparison" className="text-foreground/80 hover:text-primary transition-colors">Сравнение</a>
              <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">FAQ</a>
              <a href="#contacts" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Подать заявку
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-shift bg-clip-text text-transparent">
              Финансовые решения для вашего будущего
            </h1>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Быстрое одобрение. Прозрачные условия. Выгодные ставки от 8.9% годовых.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8">
                <Icon name="Zap" className="mr-2" size={20} />
                Получить займ
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors text-lg px-8">
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать кредит
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
            {[
              { icon: 'Clock', title: 'Быстрое решение', desc: 'Одобрение за 5 минут' },
              { icon: 'Shield', title: 'Безопасность', desc: 'Защита данных по стандартам банка' },
              { icon: 'Percent', title: 'Выгодные ставки', desc: 'От 8.9% годовых' }
            ].map((item, i) => (
              <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} className="text-white" size={24} />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Кредитный калькулятор
          </h2>
          
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-3">
                      <label className="text-sm font-medium">Сумма займа</label>
                      <span className="text-primary font-bold">{loanAmount.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <Slider
                      value={[loanAmount]}
                      onValueChange={(v) => setLoanAmount(v[0])}
                      min={10000}
                      max={3000000}
                      step={10000}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>10 тыс.</span>
                      <span>3 млн.</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-3">
                      <label className="text-sm font-medium">Срок кредита</label>
                      <span className="text-secondary font-bold">{loanTerm} мес.</span>
                    </div>
                    <Slider
                      value={[loanTerm]}
                      onValueChange={(v) => setLoanTerm(v[0])}
                      min={3}
                      max={84}
                      step={3}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>3 мес.</span>
                      <span>84 мес.</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                  <h3 className="text-lg font-semibold mb-6">Ваш платеж</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                      <span className="text-sm text-muted-foreground">Ежемесячный платеж</span>
                      <span className="text-2xl font-bold text-primary">{parseFloat(monthlyPayment).toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                      <span className="text-sm text-muted-foreground">Всего к выплате</span>
                      <span className="text-xl font-semibold">{parseFloat(totalPayment).toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                      <span className="text-sm text-muted-foreground">Переплата</span>
                      <span className="text-xl font-semibold text-secondary">{parseFloat(overpayment).toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Оформить заявку
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="comparison" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Сравнение кредитных продуктов
          </h2>
          <p className="text-center text-muted-foreground mb-12">Выберите подходящий вариант</p>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="loan">Займы</TabsTrigger>
              <TabsTrigger value="credit">Кредиты</TabsTrigger>
            </TabsList>

            {['all', 'loan', 'credit'].map(tabValue => (
              <TabsContent key={tabValue} value={tabValue} className="animate-fade-in">
                <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[200px]">Продукт</TableHead>
                            <TableHead>Ставка</TableHead>
                            <TableHead>Сумма</TableHead>
                            <TableHead>Срок</TableHead>
                            <TableHead>Тип</TableHead>
                            <TableHead className="text-right">Действие</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {creditProducts
                            .filter(p => tabValue === 'all' || p.type === tabValue)
                            .map((product, i) => (
                              <TableRow 
                                key={product.id} 
                                className={`hover:bg-primary/5 transition-colors cursor-pointer ${selectedProduct === product.name ? 'bg-primary/10' : ''}`}
                                onClick={() => setSelectedProduct(product.name)}
                              >
                                <TableCell className="font-medium">
                                  <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${product.color}`} />
                                    {product.name}
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                                    {product.rate}%
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-sm">
                                  {product.minAmount.toLocaleString('ru-RU')} - {product.maxAmount.toLocaleString('ru-RU')} ₽
                                </TableCell>
                                <TableCell className="text-sm">
                                  {product.minTerm} - {product.maxTerm} мес.
                                </TableCell>
                                <TableCell>
                                  <Badge variant="outline" className={product.type === 'loan' ? 'border-primary text-primary' : 'border-secondary text-secondary'}>
                                    {product.type === 'loan' ? 'Займ' : 'Кредит'}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                  <Button size="sm" variant="ghost" className="hover:bg-primary hover:text-white">
                                    <Icon name="ArrowRight" size={16} />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Часто задаваемые вопросы
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: 'Как быстро я могу получить одобрение?', a: 'Решение по вашей заявке принимается автоматически за 5 минут. После одобрения деньги поступают на счет в течение 15 минут.' },
              { q: 'Какие документы необходимы?', a: 'Для оформления займа нужен только паспорт РФ. Для крупных кредитов может потребоваться подтверждение дохода.' },
              { q: 'Можно ли досрочно погасить кредит?', a: 'Да, вы можете погасить кредит досрочно полностью или частично без штрафов и комиссий в любой момент.' },
              { q: 'Какая минимальная сумма займа?', a: 'Минимальная сумма составляет 5 000 рублей. Максимальная сумма для новых клиентов — до 100 000 рублей.' },
              { q: 'Что делать, если возникли сложности с выплатой?', a: 'Свяжитесь с нами при первых признаках затруднений. Мы предложим реструктуризацию или кредитные каникулы.' }
            ].map((item, i) => (
              <Card key={i} className="border-border/50 bg-card/80 backdrop-blur-sm">
                <AccordionItem value={`item-${i}`} className="border-0">
                  <AccordionTrigger className="px-6 hover:no-underline hover:bg-primary/5 rounded-lg transition-colors">
                    <span className="text-left font-semibold">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              </Card>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Свяжитесь с нами
              </h2>
              <p className="text-muted-foreground mb-8">
                Наши специалисты готовы ответить на ваши вопросы и помочь с оформлением заявки.
              </p>

              <div className="space-y-6">
                {[
                  { icon: 'Phone', title: 'Телефон', info: '8 (800) 555-35-35', desc: 'Бесплатно по России' },
                  { icon: 'Mail', title: 'Email', info: 'info@finanspro.ru', desc: 'Ответим в течение часа' },
                  { icon: 'MapPin', title: 'Адрес', info: 'г. Москва, ул. Финансовая, 1', desc: 'Офис открыт 24/7' }
                ].map((item, i) => (
                  <Card key={i} className="border-border/50 bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-primary font-medium">{item.info}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-2xl animate-fade-in">
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы перезвоним вам в течение 5 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <input className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors" placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <input className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сумма</label>
                  <input className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors" placeholder="500 000 ₽" />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="DollarSign" className="text-white" size={18} />
                </div>
                <span className="text-xl font-bold">ФинансПро</span>
              </div>
              <p className="text-sm text-muted-foreground">Финансовые решения для вашего будущего</p>
            </div>
            
            {[
              { title: 'Продукты', links: ['Займы', 'Кредиты', 'Рефинансирование'] },
              { title: 'Компания', links: ['О нас', 'Условия', 'Документы'] },
              { title: 'Поддержка', links: ['FAQ', 'Контакты', 'Помощь'] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 ФинансПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
