document.getElementById('scheduleForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // جمع البيانات من النموذج
    const name = document.getElementById('name').value;
    const level = document.getElementById('level').value;
    const interest = document.getElementById('interest').value;
    
    // التحقق من ملء جميع الحقول
    if (!name || !level || !interest) {
        alert('الرجاء ملء جميع الحقول');
        return;
    }
    
    // توليد الجدول والمصادر
    const schedule = generateSchedule(level, interest);
    const resources = generateResources(level, interest);
    
    // عرض النتيجة
    displayResult(name, schedule, resources);
});

function generateSchedule(level, interest) {
    // جدول للمبتدئين
    if (level === 'beginner') {
        if (interest === 'programming') {
            return [
                { day: 'الإثنين', topic: 'أساسيات البرمجة مع Python' },
                { day: 'الثلاثاء', topic: 'المتغيرات وأنواع البيانات' },
                { day: 'الأربعاء', topic: 'الجمل الشرطية (If/Else)' },
                { day: 'الخميس', topic: 'الحلقات التكرارية (Loops)' },
                { day: 'الجمعة', topic: 'تمارين عملية على ما تعلمت' },
                { day: 'السبت', topic: 'مشروع صغير: آلة حاسبة بسيطة' },
                { day: 'الأحد', topic: 'مراجعة وتقييم الأسبوع' }
            ];
        } else if (interest === 'ai') {
            return [
                { day: 'الإثنين', topic: 'مقدمة في الذكاء الاصطناعي' },
                { day: 'الثلاثاء', topic: 'تعلم الآلة (Machine Learning)' },
                { day: 'الأربعاء', topic: 'التعلم العميق (Deep Learning)' },
                { day: 'الخميس', topic: 'تطبيقات الذكاء الاصطناعي' },
                { day: 'الجمعة', topic: 'أخلاقيات الذكاء الاصطناعي' },
                { day: 'السبت', topic: 'مشاهدة فيديوهات تعليمية' },
                { day: 'الأحد', topic: 'تلخيص ما تعلمته' }
            ];
        } else { // both
            return [
                { day: 'الإثنين', topic: 'أساسيات Python' },
                { day: 'الثلاثاء', topic: 'مقدمة في الذكاء الاصطناعي' },
                { day: 'الأربعاء', topic: 'تمارين برمجية' },
                { day: 'الخميس', topic: 'خوارزميات تعلم الآلة' },
                { day: 'الجمعة', topic: 'مشروع صغير' },
                { day: 'السبت', topic: 'مصادر تعلم إضافية' },
                { day: 'الأحد', topic: 'راحة وتأمل' }
            ];
        }
    }
    
    // جدول للمستوى المتوسط
    else { // intermediate
        if (interest === 'programming') {
            return [
                { day: 'الإثنين', topic: 'هياكل البيانات المتقدمة' },
                { day: 'الثلاثاء', topic: 'خوارزميات الفرز والبحث' },
                { day: 'الأربعاء', topic: 'حل مشكلات على LeetCode' },
                { day: 'الخميس', topic: 'برمجة كائنية التوجه (OOP)' },
                { day: 'الجمعة', topic: 'مشروع: تطبيق ويب بسيط' },
                { day: 'السبت', topic: 'ممارسة على GitHub' },
                { day: 'الأحد', topic: 'مراجعة وتخطيط للأسبوع القادم' }
            ];
        } else if (interest === 'ai') {
            return [
                { day: 'الإثنين', topic: 'الشبكات العصبونية (Neural Networks)' },
                { day: 'الثلاثاء', topic: 'معالجة اللغات الطبيعية (NLP)' },
                { day: 'الأربعاء', topic: 'رؤية حاسوبية (Computer Vision)' },
                { day: 'الخميس', topic: 'تطبيق عملي على Kaggle' },
                { day: 'الجمعة', topic: 'تحسين أداء النماذج' },
                { day: 'السبت', topic: 'قراءة أبحاث حديثة' },
                { day: 'الأحد', topic: 'مشروع أسبوعي' }
            ];
        } else { // both
            return [
                { day: 'الإثنين', topic: 'خوارزميات متقدمة' },
                { day: 'الثلاثاء', topic: 'تعلم الآلة المتقدم' },
                { day: 'الأربعاء', topic: 'تطبيق: تحليل بيانات' },
                { day: 'الخميس', topic: 'شبكات عصبية' },
                { day: 'الجمعة', topic: 'مشروع تكاملي' },
                { day: 'السبت', topic: 'مساهمة في مشروع مفتوح المصدر' },
                { day: 'الأحد', topic: 'مراجعة شاملة' }
            ];
        }
    }
}

function generateResources(level, interest) {
    const resources = {
        programming: {
            beginner: [
                { name: 'FreeCodeCamp (العربية)', url: 'https://www.freecodecamp.org/arabic/' },
                { name: 'Python for Beginners', url: 'https://www.python.org/about/gettingstarted/' },
                { name: 'CS50 - Harvard University', url: 'https://cs50.harvard.edu/' }
            ],
            intermediate: [
                { name: 'LeetCode - تحديات برمجية', url: 'https://leetcode.com/' },
                { name: 'GitHub - مشاريع مفتوحة المصدر', url: 'https://github.com/' },
                { name: 'The Odin Project', url: 'https://www.theodinproject.com/' }
            ]
        },
        ai: {
            beginner: [
                { name: 'Elements of AI (مجاني)', url: 'https://www.elementsofai.com/' },
                { name: 'Google AI Education', url: 'https://ai.google/education/' },
                { name: 'Fast.ai - Practical Deep Learning', url: 'https://www.fast.ai/' }
            ],
            intermediate: [
                { name: 'DeepLearning.AI - Andrew Ng', url: 'https://www.deeplearning.ai/' },
                { name: 'Kaggle - مسابقات ومجموعات بيانات', url: 'https://www.kaggle.com/' },
                { name: 'MIT OpenCourseWare - AI', url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/' }
            ]
        }
    };
    
    let selected = [];
    const resourceLevel = level === 'beginner' ? 'beginner' : 'intermediate';
    
    if (interest === 'programming') {
        selected = resources.programming[resourceLevel];
    } else if (interest === 'ai') {
        selected = resources.ai[resourceLevel];
    } else { // both
        selected = [
            ...resources.programming[resourceLevel],
            ...resources.ai[resourceLevel]
        ].slice(0, 4);
    }
    
    return selected;
}

function displayResult(name, schedule, resources) {
    const resultDiv = document.getElementById('result');
    
    // بناء جدول HTML
    let tableHTML = `
        <div class="greeting">🌟 مرحباً ${name}!</div>
        <h3>📅 جدولك الأسبوعي المخصص:</h3>
        <table class="schedule-table">
            <thead>
                <tr>
                    <th>اليوم</th>
                    <th>الموضوع</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    schedule.forEach(item => {
        tableHTML += `
            <tr>
                <td><strong>${item.day}</strong></td>
                <td>${item.topic}</td>
            </tr>
        `;
    });
    
    tableHTML += `
            </tbody>
        </table>
        
        <h3>📚 المصادر المقترحة لك:</h3>
        <ul class="resources-list">
    `;
    
    resources.forEach(resource => {
        tableHTML += `
            <li>
                <a href="${resource.url}" target="_blank">${resource.name}</a>
            </li>
        `;
    });
    
    tableHTML += `
        </ul>
        
        <div class="tip-box">
            💡 نصيحة: خصص 30 دقيقة يوميًا والتزم بالجدول، وسترى تقدمًا مذهلاً!
        </div>
    `;
    
    resultDiv.innerHTML = tableHTML;
    resultDiv.classList.remove('hidden');
}