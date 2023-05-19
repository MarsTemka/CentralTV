import React from "react";
import Image from "next/image";

export default function Reuters() {
  const reuters = [
    {
      oneofhalf: "REUTERS",
      twoofhalf:
        "ЕГИПЕТИЙН БУЯНЫ БАЙГУУЛЛАГА ХҮҮХДҮҮДЭД ХОГ ХАЯГДАЛ ДАХИН БОЛОВСРУУЛАХ АРГЫГ ЗААЖ БАЙНА",
      threeofhalf:
        "Египетийн “Хогон хот” гэгддэг Маншият Нассерт төрж өссөн Тереза ​​Саид хүүхэд байхдаа зураг зурах дуртай…",
      fourofhalf: "4-р сар 5, 2023",
      image:
        "https://centraltv.mn/wp-content/uploads/2023/04/ASD1233-760x700.jpg",
    },
    {
      oneofhalf: "REUTERS",
      twoofhalf:
        "ГАЗЫН ЗУРВАСЫН КАФЕ ДАЛАЙН ЭРЭГ ДЭЭР НОМ УНШИХ БОЛОМЖ ОЛГОЖ БАЙНА",
      threeofhalf:
        "Газын зурвас дахь жижигхэн кафе хүмүүст дижитал ертөнцөөс хэсэг зуур холдож, далайн эрэг дээр ундаа…",
      fourofhalf: "4-р сар 5, 2023",
      image:
        "https://centraltv.mn/wp-content/uploads/2023/04/12312341-760x683.webp",
    },
    {
      oneofhalf: "REUTERS",
      twoofhalf:
        "ФИНЛАНДЧУУД ДЭЛХИЙН ХАМГИЙН АЗ ЖАРГАЛТАЙ УЛСААР ДАХИН ТОДОРЛОО",
      threeofhalf:
        "Даваа гарагт нийтлэгдсэн Дэлхийн аз жаргалын тайланг Финланд улс дахин тэргүүллээ. Улс үндэстний аз жаргалын…",
      fourofhalf: "4-р сар 5, 2023",
      image:
        "https://centraltv.mn/wp-content/uploads/2023/04/finland-760x563.webp",
    },
    {
      oneofhalf: "REUTERS",
      twoofhalf: "БЕЛЬГИЙН “ТЕДДИ БААВГАЙН” ЭМНЭЛЭГТЭЙ ТАНИЛЦАНА УУ",
      threeofhalf:
        "Мягмар гарагт Брюссельд чихмэл тоглоомуудад мэс засал хийж засварлажээ. Анагаахын оюутнууд хүүхдүүдэд зориулж эмнэлгийн айдсыг…",
      fourofhalf: "4-р сар 5, 2023",
      image:
        "https://centraltv.mn/wp-content/uploads/2023/04/08teddy-bear-clinic5-2-760x700.jpg",
    },
  ];
  const duet = [
    {
      topic:
        "ЕГИПЕТИЙН БУЯНЫ БАЙГУУЛЛАГА ХҮҮХДҮҮДЭД ХОГ ХАЯГДАЛ ДАХИН БОЛОВСРУУЛАХ АРГЫГ ЗААЖ БАЙНА",
      date: "4-р сар 5, 2023",
      Image:
        "https://centraltv.mn/wp-content/uploads/2023/04/ASD1233-760x700.jpg",
    },
    {
      topic:
        "ГАЗЫН ЗУРВАСЫН КАФЕ ДАЛАЙН ЭРЭГ ДЭЭР НОМ УНШИХ БОЛОМЖ ОЛГОЖ БАЙНА",
      date: "4-р сар 5, 2023",
      Image:
        "https://centraltv.mn/wp-content/uploads/2023/04/12312341-760x683.webp",
    },
    {
      topic: "ФИНЛАНДЧУУД ДЭЛХИЙН ХАМГИЙН АЗ ЖАРГАЛТАЙ УЛСААР ДАХИН ТОДОРЛОО",
      date: "4-р сар 5, 2023",
      Image:
        "https://centraltv.mn/wp-content/uploads/2023/04/finland-760x563.webp",
    },
    {
      topic: "БЕЛЬГИЙН “ТЕДДИ БААВГАЙН” ЭМНЭЛЭГТЭЙ ТАНИЛЦАНА УУ",
      date: "4-р сар 5, 2023",
      Image:
        "https://centraltv.mn/wp-content/uploads/2023/04/08teddy-bear-clinic5-2-760x700.jpg",
    },
    {
      topic:
        "ЕГИПЕТИЙН БУЯНЫ БАЙГУУЛЛАГА ХҮҮХДҮҮДЭД ХОГ ХАЯГДАЛ ДАХИН БОЛОВСРУУЛАХ АРГЫГ ЗААЖ БАЙНА",
      date: "4-р сар 5, 2023",
      Image:
        "https://centraltv.mn/wp-content/uploads/2023/04/ASD1233-760x700.jpg",
    },
    {
      topic:
        "ЕГИПЕТИЙН БУЯНЫ БАЙГУУЛЛАГА ХҮҮХДҮҮДЭД ХОГ ХАЯГДАЛ ДАХИН БОЛОВСРУУЛАХ АРГЫГ ЗААЖ БАЙНА",
      date: "4-р сар 5, 2023",
      Image:
        "https://centraltv.mn/wp-content/uploads/2023/04/ASD1233-760x700.jpg",
    },
    {
      topic:
        "ЕГИПЕТИЙН БУЯНЫ БАЙГУУЛЛАГА ХҮҮХДҮҮДЭД ХОГ ХАЯГДАЛ ДАХИН БОЛОВСРУУЛАХ АРГЫГ ЗААЖ БАЙНА",
      date: "4-р сар 5, 2023",
      Image:
        "https://centraltv.mn/wp-content/uploads/2023/04/ASD1233-760x700.jpg",
    },
    {
      topic:
        "ЕГИПЕТИЙН БУЯНЫ БАЙГУУЛЛАГА ХҮҮХДҮҮДЭД ХОГ ХАЯГДАЛ ДАХИН БОЛОВСРУУЛАХ АРГЫГ ЗААЖ БАЙНА",
      date: "4-р сар 5, 2023",
      Image:
        "https://centraltv.mn/wp-content/uploads/2023/04/ASD1233-760x700.jpg",
    },
  ];
  return (
    <>
      <div className="w-full h-screen bg-purple-900 flex justify-center px-[35px] py-[91px] ">
        <div>
          <div className="w-[1400px] h-screen bg-black flex">
            <div>
              {reuters.map((row, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex">
                    <div className="p-10">
                      <img src={row.image} height={350} width={350} />
                    </div>
                    <div className="w-[500px] flex flex-col justify-center gap-5">
                      <div className="flex flex-col gap-3">
                        <div className="text-green-600 text-[10px]">
                          {row.oneofhalf}
                        </div>
                        <div className="text-white font-medium tracking-wide hover:underline">
                          <a href="https://centraltv.mn/?p=1609">
                            {row.twoofhalf}
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col gap-5">
                        <div className="text-gray-300 font-light tracking-wide">
                          <p>{row.threeofhalf}</p>
                        </div>
                        <div className="text-gray-300 font-light">
                          <p>{row.fourofhalf}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h6 className="text-white font-light">ШИНЭ МЭДЭЭ</h6>
              <div>
                {duet.map((row, i) => (
                  <div key={i}>
                    <div className="flex">
                      <div className="p-10">
                        <img src={row.Image} width={100} height={100} />
                      </div>
                      <div className="text-green-600 text-[10px]">
                        {row.oneofhalf}
                      </div>
                      <div className="text-white font-medium tracking-wide hover:underline">
                        <a href="https://centraltv.mn/?p=1609">
                          {row.twoofhalf}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
