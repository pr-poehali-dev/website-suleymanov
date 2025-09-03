import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'Александр Иванов',
    email: 'alex.ivanov@example.com',
    phone: '+7 (999) 123-45-67',
    bio: 'Frontend разработчик с 5+ лет опыта. Увлекаюсь React и TypeScript.',
    location: 'Москва, Россия',
    website: 'https://alex-dev.ru',
    avatar: ''
  });

  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    twoFactor: true,
    publicProfile: false
  });

  const handleProfileChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSettingChange = (setting: string, value: boolean) => {
    setSettings(prev => ({ ...prev, [setting]: value }));
  };

  const stats = [
    { label: 'Проектов', value: '12', icon: 'FolderOpen' },
    { label: 'Коммитов', value: '1.2k', icon: 'GitCommit' },
    { label: 'Дней подряд', value: '45', icon: 'Flame' },
    { label: 'Звёзд', value: '89', icon: 'Star' }
  ];

  const achievements = [
    { title: 'Первый проект', description: 'Создали свой первый проект', earned: true },
    { title: 'Продуктивность', description: '7 дней активности подряд', earned: true },
    { title: 'Мастер Git', description: '100+ коммитов', earned: true },
    { title: 'Командный игрок', description: 'Пригласили 5 участников', earned: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 ring-2 ring-primary/20">
              <AvatarImage src={profile.avatar} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-bold">{profile.name}</h1>
              <p className="text-sm text-muted-foreground">{profile.email}</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-50 text-green-700">
            <Icon name="CheckCircle" size={14} className="mr-1" />
            Активен
          </Badge>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name={stat.icon as any} size={20} className="text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-400 bg-white/60">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <Icon name="User" size={16} />
              Профиль
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Icon name="FolderOpen" size={16} />
              Проекты  
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Icon name="Trophy" size={16} />
              Достижения
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Icon name="Settings" size={16} />
              Настройки
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="User" size={20} />
                    Личная информация
                  </CardTitle>
                  <CardDescription>
                    Обновите свои персональные данные
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => handleProfileChange('name', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => handleProfileChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => handleProfileChange('phone', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Местоположение</Label>
                      <Input
                        id="location"
                        value={profile.location}
                        onChange={(e) => handleProfileChange('location', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Сайт</Label>
                    <Input
                      id="website"
                      value={profile.website}
                      onChange={(e) => handleProfileChange('website', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">О себе</Label>
                    <Textarea
                      id="bio"
                      value={profile.bio}
                      onChange={(e) => handleProfileChange('bio', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button className="w-full md:w-auto">
                    <Icon name="Save" size={16} className="mr-2" />
                    Сохранить изменения
                  </Button>
                </CardContent>
              </Card>

              {/* Profile Sidebar */}
              <div className="space-y-6">
                <Card className="bg-white/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Аватар</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <Avatar className="h-24 w-24 mx-auto ring-4 ring-primary/20">
                      <AvatarImage src={profile.avatar} />
                      <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
                        {profile.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full">
                        <Icon name="Upload" size={16} className="mr-2" />
                        Загрузить фото
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full text-destructive">
                        <Icon name="Trash2" size={16} className="mr-2" />
                        Удалить
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Уровень активности</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Прогресс</span>
                        <span className="font-medium">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Отличная работа! Вы на пути к следующему уровню.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }, (_, i) => (
                <Card key={i} className="bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">Проект {i + 1}</CardTitle>
                        <CardDescription>React • TypeScript</CardDescription>
                      </div>
                      <Badge variant={i % 3 === 0 ? 'default' : i % 3 === 1 ? 'secondary' : 'outline'}>
                        {i % 3 === 0 ? 'Активный' : i % 3 === 1 ? 'Завершён' : 'В разработке'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Описание проекта и его основные возможности...
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={14} />
                        {Math.floor(Math.random() * 50) + 1}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="GitFork" size={14} />
                        {Math.floor(Math.random() * 20) + 1}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Eye" size={14} />
                        {Math.floor(Math.random() * 100) + 10}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`bg-white/60 backdrop-blur-sm ${achievement.earned ? 'ring-2 ring-primary/20' : 'opacity-60'}`}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${achievement.earned ? 'bg-primary/10' : 'bg-muted'}`}>
                        <Icon 
                          name="Trophy" 
                          size={24} 
                          className={achievement.earned ? 'text-primary' : 'text-muted-foreground'} 
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold flex items-center gap-2">
                          {achievement.title}
                          {achievement.earned && (
                            <Icon name="CheckCircle" size={16} className="text-green-600" />
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Уведомления</CardTitle>
                  <CardDescription>
                    Настройте, как вы хотите получать уведомления
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Email уведомления</Label>
                      <p className="text-sm text-muted-foreground">
                        Получать уведомления на почту
                      </p>
                    </div>
                    <Switch
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Push уведомления</Label>
                      <p className="text-sm text-muted-foreground">
                        Показывать уведомления в браузере
                      </p>
                    </div>
                    <Switch
                      checked={settings.pushNotifications}
                      onCheckedChange={(checked) => handleSettingChange('pushNotifications', checked)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Безопасность</CardTitle>
                  <CardDescription>
                    Защитите свой аккаунт дополнительными настройками
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Двухфакторная аутентификация</Label>
                      <p className="text-sm text-muted-foreground">
                        Дополнительная защита аккаунта
                      </p>
                    </div>
                    <Switch
                      checked={settings.twoFactor}
                      onCheckedChange={(checked) => handleSettingChange('twoFactor', checked)}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Публичный профиль</Label>
                      <p className="text-sm text-muted-foreground">
                        Другие пользователи смогут видеть ваш профиль
                      </p>
                    </div>
                    <Switch
                      checked={settings.publicProfile}
                      onCheckedChange={(checked) => handleSettingChange('publicProfile', checked)}
                    />
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Button variant="outline" className="w-full">
                      <Icon name="Key" size={16} className="mr-2" />
                      Изменить пароль
                    </Button>
                    <Button variant="outline" className="w-full text-destructive hover:text-destructive">
                      <Icon name="Download" size={16} className="mr-2" />
                      Экспорт данных
                    </Button>
                    <Button variant="destructive" className="w-full">
                      <Icon name="Trash2" size={16} className="mr-2" />
                      Удалить аккаунт
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}