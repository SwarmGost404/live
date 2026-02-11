type PolaroidCardProps = {
  imageUrl: string;
  text: string;
  date: string;
};

export const data: PolaroidCardProps[] = [
    {
        imageUrl: "/my-live.jpg",
        text: "Я смотрю на тебя, ты глядишь на меня - И искра, буря, безумие!",
        date: "Осень 2025"
    },
    {
        imageUrl: "/first-lina.jpg",
        text: "Ты мне целовала спину\nТуда же и наносила две тысячи ножевых\nА мне чудилась даже в них нежность \nЯ никогда так не любил прежде",
        date: "Осень 2025"
    },
    {
        imageUrl: "/first-kiss-lina.jpg",
        text: "Так не бойся, милая, ляг на снег\nСлепой художник напишет портрет\nВоспоёт твои формы поэт\nИ станет звездой актёр бродячего цирка",
        date: "Зима 2025"
    }
]
