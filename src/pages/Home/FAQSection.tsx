import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      q: "在身心中軸覺察課程中會學到什麼？為什麼能讓我有所改變？",
      a: "身心中軸覺察是帶領人找回身心平和安頓的根本方法，而這堂課會帶領你學會這個方法。近年來心理學研究越來越重視身心之間的相互影響。這套練習同時從身心下手，從放鬆身體、放空腦袋開始，逐漸感受身體的中軸線，體會中正放鬆的狀態，並讓我們處在一種覺察有彈性的狀態。心靈保持覺察，身體能夠隨心調整狀態，這正是人的理想狀態。",
    },
    {
      q: "為什麼身心中軸覺察強調放鬆與放空，卻可以提升我學業、工作或甚至是其他生活面向的改變？",
      a: "想像一下，若自己的身心很緊繃，隨時處在壓力或各種外界要求之下，久了身心會不會疲乏、失去彈性呢？就好像一條橡皮筋拉久了就會失去彈性，甚至斷掉。有感於現代人經常處在上述的狀態，能夠適時的放鬆、放手就顯得相當重要。身心中軸覺察練習強調放鬆身體、放空意念，讓你從緊繃中之回到身心平衡、富有彈性的狀態，進而更能發揮潛能，在生活各面向有所提升！",
    },
    {
      q: "在課程中，是否必須在眾人面前談論自己？",
      a: "在身心中軸課程中，我們學習專注於自我，感受自己，隨心而動，我們不會強制每個人都必須開口分享，聆聽也是一種很棒的選擇。當然，我們非常歡迎學員分享練習感受和困難，透過分享能夠整理和思考自己的練習狀況，幫助老師了解你的狀況，協助你的調整。",
    },
    {
      q: "參加身心中軸覺察課程有什麼好處？",
      a: (
        <ul className="list-none space-y-1">
          <li>✓ 提升睡眠品質，解決長期睡眠困擾。</li>
          <li>✓ 思考變得靈活有彈性，跳脫思考框架，變得更有創造力！</li>
          <li>✓ 面對生活的壓力與情緒，更能夠平和以對</li>
          <li>✓ 降低焦慮憂鬱的情緒，讓你變得更平靜。</li>
          <li>✓ 溝通能力、包容力增加提升，更能夠同理周遭人的感受。</li>
          <li>✓ 幸福感提升，更真正的活在當下。</li>
          <li>✓ 更了解自己，也更懂得照顧自己與他人。</li>
        </ul>
      ),
    },
  ];

  return (
    <section className="py-15 lg:py-20 bg-[#E1B28D]/10">
      <div className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-black mb-12">常見Q&A</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm group"
              open={false}
            >
              <summary className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors cursor-pointer list-none">
                <span className="text-2xl font-bold text-black">{faq.q}</span>
                <Minus className="w-5 h-5 text-[#6B705C] hidden group-open:block" />
                <Plus className="w-5 h-5 text-[#6B705C] hidden lg:block group-open:hidden" />
              </summary>
              <div className="p-5 border-t border-gray-100 text-xl leading-relaxed animate-fadeIn">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
