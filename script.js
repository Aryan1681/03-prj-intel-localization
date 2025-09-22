document.addEventListener('DOMContentLoaded', () => {
  const i18n = {
    /* ENGLISH */
    en: {
      dir: 'ltr',
      'lang.choose': 'Choose language',
      'lang.note': 'Interface text updates instantly when you switch languages.',
      'hero.title': 'Sustainability Timeline',
      'hero.subtitle': 'A responsive, interactive look at milestones in Intel’s sustainability journey.',
      'hero.cta': 'Explore',
      'tabs.all': 'All','tabs.energy': 'Energy','tabs.water': 'Water','tabs.waste': 'Waste','tabs.climate': 'Climate','tabs.vision': 'Vision',
      status: t => `Showing: ${t}`,
      'timeline.title': 'Milestones',
      'timeline.desc': 'Horizontal scroll with snap on desktop. Vertical stack on mobile. Flip a card to read more.',
      'timeline.hint': 'Scroll ⇢',
      'buttons.readmore': 'Read more','buttons.back':'Back','buttons.learn':'Learn more',
      'card.back.heading':'What changed',
      chips:{energy:'Energy',water:'Water',waste:'Waste',climate:'Climate',vision:'Vision'},
      'card1.title':'Renewable Electricity Expansion',
      'card1.summary':'Scaling clean electricity and efficiency across global sites.',
      'card2.title':'Water Stewardship','card2.summary':'Restoration projects and water reuse to support watershed health.',
      'card3.title':'Zero Waste Progress','card3.summary':'Circularity, supplier engagement, and responsible handling.',
      'card4.title':'Climate Action Roadmap','card4.summary':'Operational emissions, supplier ties, and product efficiency.',
      'card5.title':'2030 Ambitions','card5.summary':'Energy efficiency, renewable coverage, responsible manufacturing.',
      'card6.title':'Long-Term Net-Zero Vision','card6.summary':'Efficiency, clean energy, and resilient ecosystems.',
      /* HTML bullet lists */
      'card1.details': `
        <li>Set a goal of <strong>100% renewable electricity by 2030</strong>; accelerated purchases to reach it.</li>
        <li>Expanded conservation projects toward <strong>4B kWh cumulative savings</strong> by 2030.</li>
        <li>Reported <strong>37.9B kWh</strong> renewable electricity over five years.</li>
        <li>Targeted <strong>LEED® certification</strong> for new factories and facilities.</li>
        <li>Playbooks with sites/utilities to expand access to renewable contracts.</li>`,
      'card2.details': `
        <li>Commitment to <strong>net positive water by 2030</strong>; conserve <strong>60B gallons</strong>.</li>
        <li>Funded <strong>40+ watershed restoration projects</strong> in multiple regions.</li>
        <li>By 2023, ~<strong>13B gallons</strong> conserved and restored.</li>
        <li>Scaled on-site <strong>reuse and conservation</strong> and external projects.</li>
        <li>Published annual water reports with project details.</li>`,
      'card3.details': `
        <li>Target <strong>zero waste to landfill by 2030</strong>; circular strategies for <strong>60%</strong> of manufacturing waste.</li>
        <li>~<strong>4%</strong> of waste to landfill by end of 2023.</li>
        <li>In 2024, circular practices across ~<strong>66%</strong> of manufacturing waste streams.</li>
        <li>Supplier partnerships to design for reuse and cut packaging impacts.</li>
        <li>High recycling rates for non-hazardous waste across sites.</li>`,
      'card4.details': `
        <li><strong>Net-zero Scope 1 &amp; 2 by 2040</strong>; interim 2030 goal to cut absolute emissions 10% vs. 2019.</li>
        <li><strong>99% renewable electricity</strong> in 2023; continued progress.</li>
        <li>Roadmap includes <strong>novel abatement</strong> for F-GHGs/N<sub>2</sub>O and tool optimization.</li>
        <li>New facilities targeted to <strong>USGBC LEED® standards</strong>.</li>
        <li>Programs like <strong>Catalyze</strong> and the <strong>Semiconductor Climate Consortium</strong>.</li>`,
      'card5.details': `
        <li><strong>100% renewable electricity</strong> globally and <strong>4B kWh</strong> cumulative savings.</li>
        <li><strong>Net positive water</strong>: conserve <strong>60B gallons</strong> and fund restoration.</li>
        <li><strong>Zero waste to landfill</strong>; circular strategies for <strong>60%</strong> of manufacturing waste.</li>
        <li><strong>Supply chain</strong>: reduce Scope 3 by <strong>30%</strong> from 2021.</li>
        <li><strong>Products</strong>: 10x microprocessor efficiency; >30% smaller platform footprint.</li>`,
      'card6.details': `
        <li><strong>Net-zero Scope 1 &amp; 2 by 2040</strong>; maintain <strong>100% renewable electricity</strong>.</li>
        <li><strong>Net-zero upstream Scope 3 by 2050</strong> with supplier engagement.</li>
        <li>Deploy <strong>novel abatement</strong> with higher DRE as tech matures.</li>
        <li>Electrify fleets; adopt low-GWP heat transfer fluids.</li>
        <li>Build to <strong>LEED® standards</strong> and scale conservation programs.</li>
        <li>Deeper collaboration via <strong>Catalyze</strong> and <strong>SCC</strong>.</li>`,
      /* section + nl + modal */
      'pillars.title':'Global Impact In Focus',
      'pillars.desc':'Three pillars that keep Intel’s sustainability leadership moving forward across every region.',
      'pillars.ecosystems.title':'Local ecosystems',
      'pillars.ecosystems.desc':'Intel partners with community experts to restore habitats, replenish water, and advance inclusive green jobs.',
      'pillars.efficiency.title':'Efficient technology',
      'pillars.efficiency.desc':'Breakthrough architectures and cooling innovations lower emissions from fabs to data centers worldwide.',
      'pillars.partnerships.title':'Responsible partnerships',
      'pillars.partnerships.desc':'Suppliers and customers use shared dashboards, training, and clean-power purchasing to reach climate goals faster.',
      'nl.title':'Join the Sustainability Newsletter','nl.desc':'Monthly intel on regenerative design, community projects, and the research behind our climate pledges.',
      'nl.email':'Email','nl.submit':'Subscribe securely','nl.help':'We encrypt your submission and only use it for sustainability updates.','nl.invalid':'Please enter a valid email.',
      'modal.title':"You're in",'modal.body':'Thanks for subscribing. Check your inbox to confirm.','modal.close':'Close',
      'footer.note':'Educational project inspired by Intel’s sustainability themes. Images: Unsplash.'
    },

    /* ARABIC (RTL) */
    ar: {
      dir:'rtl',
      'lang.choose':'اختر اللغة','lang.note':'يتم تحديث واجهة النص فوراً عند تغيير اللغة.',
      'hero.title':'الاستدامة عبر العصور','hero.subtitle':'نظرة تفاعلية على محطات رحلة الاستدامة لدى Intel.','hero.cta':'استكشف',
      'tabs.all':'الكل','tabs.energy':'الطاقة','tabs.water':'المياه','tabs.waste':'النفايات','tabs.climate':'المناخ','tabs.vision':'الرؤية',
      status:t=>`المعروض: ${t}`,
      'timeline.title':'محطات','timeline.desc':'تمرير أفقي مع تثبيت على المكتب، وترتيب عمودي على الجوال. اقلب البطاقة لقراءة المزيد.','timeline.hint':'تمرير ⇠',
      'buttons.readmore':'اقرأ المزيد','buttons.back':'رجوع','buttons.learn':'اعرف أكثر','card.back.heading':'ما الذي تغيّر',
      chips:{energy:'الطاقة',water:'المياه',waste:'النفايات',climate:'المناخ',vision:'الرؤية'},
      'card1.title':'توسيع الكهرباء المتجددة','card1.summary':'تسريع الطاقة النظيفة والكفاءة عبر المواقع العالمية.',
      'card2.title':'رعاية المياه','card2.summary':'مشروعات ترميم وإعادة استخدام المياه لدعم صحة الأحواض.',
      'card3.title':'التقدّم نحو صفر نفايات','card3.summary':'الاقتصاد الدائري وإشراك المورّدين والمعالجة المسؤولة.',
      'card4.title':'خارطة طريق للعمل المناخي','card4.summary':'انبعاثات التشغيل، سلاسل الإمداد وكفاءة المنتج.',
      'card5.title':'طموحات 2030','card5.summary':'كفاءة الطاقة، تغطية المتجددة، تصنيع مسؤول.',
      'card6.title':'رؤية حياد كربوني طويلة الأمد','card6.summary':'الكفاءة والطاقة النظيفة وأنظمة بيئية مرنة.',
      'card1.details':`
        <li>هدف <strong>100% كهرباء متجددة بحلول 2030</strong> وتسريع الشراء للوصول إليه.</li>
        <li>توسعة مشروعات كفاءة الطاقة نحو <strong>وفر تراكمي 4 مليار ك.و.س</strong>.</li>
        <li>الإبلاغ عن <strong>37.9 مليار ك.و.س</strong> من الكهرباء المتجددة خلال خمس سنوات.</li>
        <li>استهداف شهادات <strong>LEED®</strong> للمصانع والمباني الجديدة.</li>
        <li>أدلة عمل مع المواقع والمرافق لتوسيع الوصول لعقود الطاقة المتجددة.</li>`,
      'card2.details':`
        <li>التزام <strong>ماء إيجابي بحلول 2030</strong>؛ حفظ <strong>60 مليار جالون</strong>.</li>
        <li>تمويل <strong>أكثر من 40 مشروع ترميم أحواض</strong>.</li>
        <li>بنهاية 2023: نحو <strong>13 مليار جالون</strong> محفوظ ومُستعاد.</li>
        <li>توسيع <strong>إعادة الاستخدام والحفظ</strong> في المواقع ومشروعات خارجية.</li>
        <li>تقارير سنوية للمياه بتفاصيل المشاريع والتقدم.</li>`,
      'card3.details':`
        <li>الهدف <strong>صفر نفايات للمكبات 2030</strong> واستراتيجيات دائرية لـ<strong>60%</strong> من نفايات التصنيع.</li>
        <li>إرسال نحو <strong>4%</strong> فقط للمكبات بنهاية 2023.</li>
        <li>في 2024: ممارسات دائرية عبر ~<strong>66%</strong> من تدفقات نفايات التصنيع.</li>
        <li>شراكات مورّدين للتصميم لإعادة الاستخدام وتقليل العبوات.</li>
        <li>معدلات تدوير مرتفعة للنفايات غير الخطرة.</li>`,
      'card4.details':`
        <li><strong>حياد سكوب 1 و2 بحلول 2040</strong>؛ هدف 2030 لخفض 10% مقابل 2019.</li>
        <li><strong>99% كهرباء متجددة</strong> في 2023؛ استمرار التقدم.</li>
        <li>تقنيات <strong>خفض مبتكرة</strong> لغازات F-GHGs/N<sub>2</sub>O وتحسين الأدوات.</li>
        <li>منشآت جديدة وفق معايير <strong>LEED®</strong>.</li>
        <li>برامج مثل <strong>Catalyze</strong> و<strong>SCC</strong> لتسريع طاقة المورّدين المتجددة.</li>`,
      'card5.details':`
        <li><strong>100% كهرباء متجددة</strong> عالميًا و<strong>4 مليار ك.و.س</strong> وفر تراكمي.</li>
        <li><strong>ماء إيجابي</strong>: حفظ <strong>60 مليار جالون</strong> وتمويل الترميم.</li>
        <li><strong>صفر نفايات للمكبات</strong> واستراتيجيات دائرية لـ<strong>60%</strong> من نفايات التصنيع.</li>
        <li><strong>سلسلة الإمداد</strong>: خفض سكوب 3 بنسبة <strong>30%</strong> من خط أساس 2021.</li>
        <li><strong>المنتجات</strong>: كفاءة المعالجات 10x وتقليل بصمة المنصة بأكثر من 30%.</li>`,
      'card6.details':`
        <li><strong>حياد سكوب 1 و2 بحلول 2040</strong>؛ الحفاظ على <strong>100% كهرباء متجددة</strong>.</li>
        <li><strong>حياد سكوب 3 العلوي 2050</strong> مع إشراك المورّدين.</li>
        <li>نشر <strong>تقنيات خفض مبتكرة</strong> بكفاءة أعلى.</li>
        <li>كهربـة الأسطول والتحول لوسائط نقل حراري منخفضة GWP.</li>
        <li>البناء وفق <strong>LEED®</strong> وتوسيع برامج الكفاءة.</li>
        <li>تعميق التعاون عبر <strong>Catalyze</strong> و<strong>SCC</strong>.</li>`,
      'pillars.title':'أثر عالمي في الواجهة','pillars.desc':'ثلاث ركائز تدفع ريادة الاستدامة لدى Intel.',
      'pillars.ecosystems.title':'الأنظمة البيئية المحلية','pillars.ecosystems.desc':'ترميم المواطن وتجديد المياه ووظائف خضراء شاملة.',
      'pillars.efficiency.title':'تقنية عالية الكفاءة','pillars.efficiency.desc':'بنى وتبريد مبتكران لخفض الانبعاثات.',
      'pillars.partnerships.title':'شراكات مسؤولة','pillars.partnerships.desc':'لوحات مشتركة وتدريب وشراء طاقة نظيفة.',
      'nl.title':'اشترك في نشرتنا للاستدامة','nl.desc':'تحديثات شهرية حول التصميم التجديدي والمشروعات المجتمعية.',
      'nl.email':'البريد الإلكتروني','nl.submit':'اشترك بأمان','nl.help':'نشفّر بياناتك ونستخدمها للتحديثات فقط.','nl.invalid':'يرجى إدخال بريد إلكتروني صالح.',
      'modal.title':'تم الاشتراك','modal.body':'شكرًا لاشتراكك. تحقق من بريدك للتأكيد.','modal.close':'إغلاق',
      'footer.note':'مشروع تعليمي مستوحى من موضوعات الاستدامة لدى Intel. الصور: Unsplash.'
    },

    /* SPANISH */
    es: {
      dir:'ltr',
      'lang.choose':'Elige idioma','lang.note':'La interfaz se actualiza al instante cuando cambias de idioma.',
      'hero.title':'Cronología de sostenibilidad','hero.subtitle':'Vista interactiva y adaptable de los hitos de sostenibilidad de Intel.','hero.cta':'Explorar',
      'tabs.all':'Todos','tabs.energy':'Energía','tabs.water':'Agua','tabs.waste':'Residuos','tabs.climate':'Clima','tabs.vision':'Visión',
      status:t=>`Mostrando: ${t}`,
      'timeline.title':'Hitos','timeline.desc':'Desplazamiento horizontal con ajuste en escritorio. En móvil, pila vertical.','timeline.hint':'Desplaza ⇢',
      'buttons.readmore':'Leer más','buttons.back':'Volver','buttons.learn':'Más información','card.back.heading':'Qué cambió',
      chips:{energy:'Energía',water:'Agua',waste:'Residuos',climate:'Clima',vision:'Visión'},
      'card1.title':'Expansión de electricidad renovable','card1.summary':'Escalado de energía limpia y eficiencia en sitios globales.',
      'card2.title':'Gestión del agua','card2.summary':'Proyectos de restauración y reúso para la salud de cuencas.',
      'card3.title':'Avances hacia cero residuos','card3.summary':'Circularidad, alianzas con proveedores y manejo responsable.',
      'card4.title':'Hoja de ruta de acción climática','card4.summary':'Emisiones operativas, cadena de suministro y eficiencia del producto.',
      'card5.title':'Ambiciones 2030','card5.summary':'Eficiencia energética, cobertura renovable y fabricación responsable.',
      'card6.title':'Visión neto-cero a largo plazo','card6.summary':'Eficiencia, energía limpia y ecosistemas resilientes.',
      'card1.details':`
        <li>Meta de <strong>100% electricidad renovable para 2030</strong>; compras aceleradas.</li>
        <li>Proyectos de conservación hacia <strong>4 mil millones kWh</strong> ahorrados.</li>
        <li><strong>37.9 mil millones kWh</strong> de electricidad renovable reportados en cinco años.</li>
        <li>Objetivo de certificación <strong>LEED®</strong> en nuevas instalaciones.</li>
        <li>Guías con sitios y servicios para ampliar contratos renovables.</li>`,
      'card2.details':`
        <li>Compromiso con <strong>agua neta positiva para 2030</strong>; conservar <strong>60 mil millones de galones</strong>.</li>
        <li>Más de <strong>40 proyectos</strong> de restauración de cuencas.</li>
        <li>Para 2023: ~<strong>13 mil millones de galones</strong> conservados y restaurados.</li>
        <li>Ampliación del <strong>reúso y conservación</strong> en sitio y proyectos externos.</li>
        <li>Informes anuales con detalle de proyectos.</li>`,
      'card3.details':`
        <li>Objetivo <strong>cero residuos a vertedero en 2030</strong>; estrategias circulares para el <strong>60%</strong> de residuos de fabricación.</li>
        <li>~<strong>4%</strong> a vertedero a finales de 2023.</li>
        <li>En 2024, prácticas circulares en ~<strong>66%</strong> de corrientes de residuos.</li>
        <li>Alianzas con proveedores para rediseñar y reducir empaques.</li>
        <li>Altas tasas de reciclaje para residuos no peligrosos.</li>`,
      'card4.details':`
        <li><strong>Neto-cero Alcance 1 y 2 en 2040</strong>; meta intermedia 2030 de −10% vs 2019.</li>
        <li><strong>99% electricidad renovable</strong> en 2023.</li>
        <li><strong>Abatimiento novedoso</strong> para F-GHG/N<sub>2</sub>O y optimización de equipos.</li>
        <li>Nuevas instalaciones con estándares <strong>LEED®</strong>.</li>
        <li>Programas como <strong>Catalyze</strong> y el <strong>SCC</strong>.</li>`,
      'card5.details':`
        <li><strong>100% electricidad renovable</strong> y <strong>4 mil millones kWh</strong> ahorrados.</li>
        <li><strong>Agua neta positiva</strong>: conservar <strong>60 mil millones de galones</strong>.</li>
        <li><strong>Cero residuos a vertedero</strong>; circularidad para el <strong>60%</strong> del residuo de fabricación.</li>
        <li><strong>Cadena de suministro</strong>: −<strong>30%</strong> Alcance 3 vs 2021.</li>
        <li><strong>Productos</strong>: 10× eficiencia y −30% huella de referencia.</li>`,
      'card6.details':`
        <li><strong>Neto-cero Alcance 1 y 2 en 2040</strong>; mantener <strong>100% renovable</strong>.</li>
        <li><strong>Neto-cero Alcance 3 upstream en 2050</strong>.</li>
        <li>Despliegue de <strong>abatimiento novedoso</strong> con mayor eficiencia.</li>
        <li>Electrificar flotas y fluidos de bajo GWP.</li>
        <li>Construir con <strong>LEED®</strong> y ampliar conservación.</li>
        <li>Colaboración profunda vía <strong>Catalyze</strong> y <strong>SCC</strong>.</li>`,
      'pillars.title':'Impacto global en foco','pillars.desc':'Tres pilares que impulsan el liderazgo de sostenibilidad de Intel.',
      'pillars.ecosystems.title':'Ecosistemas locales','pillars.ecosystems.desc':'Restaurar hábitats, recargar agua y empleos verdes inclusivos.',
      'pillars.efficiency.title':'Tecnología eficiente','pillars.efficiency.desc':'Arquitecturas y enfriamiento que reducen emisiones.',
      'pillars.partnerships.title':'Alianzas responsables','pillars.partnerships.desc':'Paneles compartidos y compra de energía limpia.',
      'nl.title':'Suscríbete al boletín','nl.desc':'Actualizaciones mensuales de sostenibilidad.',
      'nl.email':'Correo electrónico','nl.submit':'Suscribirme de forma segura','nl.help':'Ciframos tu envío y lo usamos solo para actualizaciones.','nl.invalid':'Introduce un correo válido.',
      'modal.title':'Listo','modal.body':'Gracias por suscribirte. Revisa tu correo para confirmar.','modal.close':'Cerrar',
      'footer.note':'Proyecto educativo inspirado en Intel. Imágenes: Unsplash.'
    },

    /* HINDI */
    hi: {
      dir:'ltr',
      'lang.choose':'भाषा चुनें','lang.note':'भाषा बदलते ही इंटरफ़ेस तुरंत अपडेट हो जाता है।',
      'hero.title':'सस्टेनेबिलिटी टाइमलाइन','hero.subtitle':'Intel की सस्टेनेबिलिटी यात्रा के पड़ावों पर एक इंटरैक्टिव नज़र।','hero.cta':'अन्वेषण करें',
      'tabs.all':'सभी','tabs.energy':'ऊर्जा','tabs.water':'जल','tabs.waste':'कचरा','tabs.climate':'जलवायु','tabs.vision':'विज़न',
      status:t=>`दिखाया जा रहा है: ${t}`,
      'timeline.title':'मील के पत्थर','timeline.desc':'डेस्कटॉप पर क्षैतिज स्क्रॉल; मोबाइल पर ऊर्ध्व पंक्ति।','timeline.hint':'स्क्रॉल ⇢',
      'buttons.readmore':'और पढ़ें','buttons.back':'वापस','buttons.learn':'और जानें','card.back.heading':'क्या बदला',
      chips:{energy:'ऊर्जा',water:'जल',waste:'कचरा',climate:'जलवायु',vision:'विज़न'},
      'card1.title':'नवीकरणीय बिजली का विस्तार','card1.summary':'दुनिया भर में स्वच्छ ऊर्जा और दक्षता का विस्तार।',
      'card2.title':'जल प्रबंधन','card2.summary':'जलग्रह स्वास्थ्य के लिए पुनर्स्थापन और पुन: उपयोग।',
      'card3.title':'शून्य कचरा प्रगति','card3.summary':'परिपत्रता, आपूर्तिकर्ता भागीदारी और ज़िम्मेदार प्रबंधन।',
      'card4.title':'जलवायु कार्य रोडमैप','card4.summary':'संचालन उत्सर्जन, आपूर्ति शृंखला और उत्पाद दक्षता।',
      'card5.title':'2030 लक्ष्य','card5.summary':'ऊर्जा दक्षता, नवीकरणीय कवरेज और ज़िम्मेदार विनिर्माण।',
      'card6.title':'दीर्घकालीन नेट-ज़ीरो दृष्टि','card6.summary':'दक्षता, स्वच्छ ऊर्जा और लचीले इकोसिस्टम।',
      'card1.details':`
        <li><strong>2030 तक 100% नवीकरणीय बिजली</strong> का लक्ष्य; खरीद तेज़ की गई।</li>
        <li><strong>4 बिलियन kWh</strong> संचयी बचत की ओर ऊर्जा संरक्षण परियोजनाएँ।</li>
        <li>पाँच वर्षों में <strong>37.9 बिलियन kWh</strong> नवीकरणीय बिजली की रिपोर्ट।</li>
        <li>नई इकाइयों के लिए <strong>LEED®</strong> मानकों का लक्ष्य।</li>
        <li>नवीकरणीय अनुबंधों तक बेहतर पहुँच के लिए मार्गदर्शिकाएँ।</li>`,
      'card2.details':`
        <li><strong>2030 तक जल-सकारात्मक</strong> बनने का संकल्प; <strong>60 बिलियन गैलन</strong> संरक्षण।</li>
        <li><strong>40+</strong> जलग्रह पुनर्स्थापन प्रोजेक्ट्स।</li>
        <li>2023 तक ~<strong>13 बिलियन गैलन</strong> संरक्षित/पुनर्स्थापित।</li>
        <li>स्थल पर <strong>रीयूज़ और कंज़र्वेशन</strong> का विस्तार, बाहरी प्रोजेक्ट्स सहित।</li>
        <li>वार्षिक जल रिपोर्टें प्रकाशित।</li>`,
      'card3.details':`
        <li><strong>2030 तक शून्य लैंडफिल</strong> का लक्ष्य; निर्माण कचरे के <strong>60%</strong> के लिए परिपत्र रणनीतियाँ।</li>
        <li>2023 के अंत तक केवल ~<strong>4%</strong> लैंडफिल को भेजा गया।</li>
        <li>2024 में ~<strong>66%</strong> प्रवाहों पर परिपत्र प्रथाएँ लागू।</li>
        <li>रीयूज़-डिज़ाइन और पैकेजिंग प्रभाव घटाने हेतु साझेदारियाँ।</li>
        <li>गैर-खतरनाक कचरे की उच्च रीसाइक्लिंग दरें।</li>`,
      'card4.details':`
        <li><strong>2040 तक स्कोप 1/2 नेट-ज़ीरो</strong>; 2030 में 2019 की तुलना में 10% कटौती।</li>
        <li><strong>99% नवीकरणीय बिजली</strong> (2023) और आगे प्रगति।</li>
        <li><strong>नवीन एबेटमेंट</strong> तकनीक और टूल ऑप्टिमाइज़ेशन।</li>
        <li>नई सुविधाएँ <strong>LEED®</strong> मानकों के अनुरूप।</li>
        <li><strong>Catalyze</strong> और <strong>SCC</strong> जैसी पहलें।</li>`,
      'card5.details':`
        <li><strong>100% नवीकरणीय बिजली</strong> और <strong>4B kWh</strong> संचयी बचत।</li>
        <li><strong>जल-सकारात्मक</strong>: <strong>60B गैलन</strong> संरक्षण और पुनर्स्थापन।</li>
        <li><strong>शून्य लैंडफिल</strong>; <strong>60%</strong> कचरे के लिए परिपत्र रणनीति।</li>
        <li><strong>सप्लाई चेन</strong>: स्कोप 3 में <strong>30%</strong> कमी (2021 बेसलाइन)।</li>
        <li><strong>उत्पाद</strong>: 10x दक्षता, 30%+ छोटा प्लेटफ़ॉर्म फुटप्रिंट।</li>`,
      'card6.details':`
        <li><strong>2040 तक स्कोप 1/2 नेट-ज़ीरो</strong>; <strong>100% नवीकरणीय</strong> बनाए रखना।</li>
        <li><strong>2050 तक अपस्ट्रीम स्कोप 3 नेट-ज़ीरो</strong>.</li>
        <li>उच्च DRE वाली <strong>नवीन एबेटमेंट</strong> तकनीकें।</li>
        <li>फ्लीट का विद्युतीकरण; कम-GWP फ्लूइड्स।</li>
        <li><strong>LEED®</strong> मानक और संरक्षण कार्यक्रमों का विस्तार।</li>
        <li><strong>Catalyze</strong> और <strong>SCC</strong> के माध्यम से सहयोग।</li>`,
      'pillars.title':'वैश्विक प्रभाव केंद्र में','pillars.desc':'तीन स्तंभ जो नेतृत्व को आगे बढ़ाते हैं।',
      'pillars.ecosystems.title':'स्थानीय पारिस्थितिकी तंत्र','pillars.ecosystems.desc':'आवास पुनर्स्थापन, जल पुनर्भरण, समावेशी हरी नौकरियाँ।',
      'pillars.efficiency.title':'कुशल तकनीक','pillars.efficiency.desc':'उन्नत आर्किटेक्चर और कूलिंग से उत्सर्जन कम।',
      'pillars.partnerships.title':'जिम्मेदार साझेदारियाँ','pillars.partnerships.desc':'साझा डैशबोर्ड और स्वच्छ ऊर्जा खरीद।',
      'nl.title':'न्यूज़लेटर से जुड़ें','nl.desc':'सस्टेनेबिलिटी पर मासिक अपडेट।',
      'nl.email':'ईमेल','nl.submit':'सुरक्षित सदस्यता','nl.help':'हम आपका सबमिशन एन्क्रिप्ट करते हैं।','nl.invalid':'कृपया मान्य ईमेल दर्ज करें।',
      'modal.title':'सदस्यता हो गई','modal.body':'पुष्टि के लिए ईमेल देखें।','modal.close':'बंद करें',
      'footer.note':'Intel से प्रेरित शैक्षिक प्रोजेक्ट।'
    },

    /* GUJARATI */
    gu: {
      dir:'ltr',
      'lang.choose':'ભાષા પસંદ કરો','lang.note':'ભાષા બદલતાં જ ઇન્ટરફેસ તરત અપડેટ થાય છે.',
      'hero.title':'સસ્ટેનેબિલિટી સમયરેખા','hero.subtitle':'Intel ની સસ્ટેનેબિલિટી યાત્રાના માઈલસ્ટોનનો દેખાવ.','hero.cta':'અન્વેષણ કરો',
      'tabs.all':'બધું','tabs.energy':'ઊર્જા','tabs.water':'પાણી','tabs.waste':'કચરો','tabs.climate':'હવામાન','tabs.vision':'દ્રષ્ટિ',
      status:t=>`દર્શાવ્યું: ${t}`,
      'timeline.title':'માઈલસ્ટોન','timeline.desc':'ડેસ્કટોપ પર આડું સ્ક્રોલ; મોબાઈલ પર ઊભું ગોઠવણ.','timeline.hint':'સ્ક્રોલ ⇢',
      'buttons.readmore':'વધુ વાંચો','buttons.back':'પાછા','buttons.learn':'વધુ જાણો','card.back.heading':'શું બદલાયું',
      chips:{energy:'ઊર્જા',water:'પાણી',waste:'કચરો',climate:'હવામાન',vision:'દ્રષ્ટિ'},
      'card1.title':'નવજીવન ઊર્જા વિસ્તરણ','card1.summary':'દુનિયાભરમાં સ્વચ્છ ઊર્જા અને કાર્યક્ષમતા વધારવી.',
      'card2.title':'જળ સંભાળ','card2.summary':'વોટરશેડ માટે પુનઃસ્થાપન અને પુનઃઉપયોગ.',
      'card3.title':'શૂન્ય કચરો પ્રગતિ','card3.summary':'વર્તુળ આર્થિકતા અને જવાબદાર સંભાળ.',
      'card4.title':'જલવાયુ ક્રિયા માર્ગ','card4.summary':'પરિચાલન ઉત્સર્જન, સપ્લાય-ચેઇન, ઉત્પાદન કાર્યક્ષમતા.',
      'card5.title':'2030 આશાઓ','card5.summary':'ઊર્જા કાર્યક્ષમતા, નવીનીકરણીય આવરણ, જવાબદાર મેન્યુફેક્ચરિંગ.',
      'card6.title':'લાંબા ગાળાની નેટ-ઝીરો દ્રષ્ટિ','card6.summary':'કાર્યક્ષમતા, સ્વચ્છ ઊર્જા, સ્થિતિસ્થાપક ઇકોસિસ્ટમ.',
      'card1.details':`
        <li><strong>2030 સુધી 100% નવીનીકરણીય વીજળી</strong> હાંસલ કરવાનો લક્ષ્ય; ખરીદી તેજ.</li>
        <li><strong>4B kWh</strong> બચત તરફ સંરક્ષણ પ્રોજેક્ટ્સ.</li>
        <li>પાંચ વર્ષમાં <strong>37.9B kWh</strong> નવીનીકરણીય વીજળી.</li>
        <li>નવી સુવિધાઓ માટે <strong>LEED®</strong> ધોરણો.</li>
        <li>નવીકરણ કરારની ઍક્સેસ વધારવા માટે પ્લેબુક્સ.</li>`,
      'card2.details':`
        <li><strong>2030 સુધી પાણીમાં નેટ-પોઝિટિવ</strong>; <strong>60B ગેલન</strong> બચત.</li>
        <li><strong>40+</strong> વોટરશેડ પુનઃસ્થાપન પ્રોજેક્ટ્સ.</li>
        <li>2023 સુધી ~<strong>13B ગેલન</strong> બચાવ્યા/પુનઃસ્થાપિત.</li>
        <li>સાઇટ પર <strong>રીયુઝ અને કન્ઝર્વેશન</strong> નો વ્યાપ.</li>
        <li>વર્ષિક પાણી અહેવાલો.</li>`,
      'card3.details':`
        <li><strong>2030 સુધી શૂન્ય લૅન્ડફિલ</strong>; ઉત્પાદન કચરાના <strong>60%</strong> માટે વર્તુળ રણનીતિ.</li>
        <li>2023ના અંતે ~<strong>4%</strong> જ લૅન્ડફિલ માટે મોકલાયો.</li>
        <li>2024માં ~<strong>66%</strong> પ્રવાહોમાં પરિપત્ર પ્રથાઓ.</li>
        <li>રીયુઝ ડિઝાઇન અને પેકેજિંગ અસર ઘટાડવા ભાગીદારી.</li>
        <li>ગેર-હાનિકારક કચરાનો ઊંચો રિસાયક્લિંગ દર.</li>`,
      'card4.details':`
        <li><strong>2040 સુધી સ્કોપ 1/2 નેટ-ઝીરો</strong>; 2030માં 10% ઘટાડો.</li>
        <li><strong>99% નવીનીકરણીય વીજળી</strong> (2023).</li>
        <li><strong>નવતર અબેટમેન્ટ</strong> ટેક અને ટૂલ ઑપ્ટિમાઇઝેશન.</li>
        <li><strong>LEED®</strong> ધોરણો મુજબ નવી સુવિધાઓ.</li>
        <li><strong>Catalyze</strong> અને <strong>SCC</strong> જેવી પહેલો.</li>`,
      'card5.details':`
        <li><strong>100% નવીનીકરણીય વીજળી</strong> અને <strong>4B kWh</strong> બચત.</li>
        <li><strong>નેટ-પોઝિટિવ પાણી</strong>: <strong>60B ગેલન</strong> બચત.</li>
        <li><strong>શૂન્ય લૅન્ડફિલ</strong>; <strong>60%</strong> માટે વર્તુળ રણનીતિ.</li>
        <li><strong>સપ્લાય ચેઇન</strong>: સ્કોપ 3માં <strong>30%</strong> ઘટાડો.</li>
        <li><strong>ઉત્પાદનો</strong>: 10x કાર્યક્ષમતા, 30%+ ઓછું ફૂટપ્રિન્ટ.</li>`,
      'card6.details':`
        <li><strong>2040 સુધી સ્કોપ 1/2 નેટ-ઝીરો</strong>; <strong>100% નવીનીકરણીય</strong> જાળવવું.</li>
        <li><strong>2050 સુધી અપસ્ટ્રીમ સ્કોપ 3 નેટ-ઝીરો</strong>.</li>
        <li>ઉચ્ચ DRE સાથે <strong>નવતર અબેટમેન્ટ</strong>.</li>
        <li>ફ્લીટ ઇલેક્ટ્રિફિકેશન; નીચા-GWP ફ્લુઇડ્સ.</li>
        <li><strong>LEED®</strong> ધોરણો અને સંરક્ષણ કાર્યક્રમો.</li>
        <li><strong>Catalyze</strong> અને <strong>SCC</strong> દ્વારા સહકાર.</li>`,
      'pillars.title':'વૈશ્વિક અસર પર ફોકસ','pillars.desc':'ત્રણ પાયાઓ જે નેતૃત્વ આગળ ધપાવે છે.',
      'pillars.ecosystems.title':'સ્થાનિક ઇકોસિસ્ટમ','pillars.ecosystems.desc':'વસાહત પુનઃસ્થાપન, પાણી પુનર્ભરણ, સમાવે તેવા લીલા રોજગાર.',
      'pillars.efficiency.title':'કાર્યક્ષમ ટેકનોલોજી','pillars.efficiency.desc':'આર્કિટેક્ચર અને કૂલિંગથી ઉત્સર્જન ઘટાડો.',
      'pillars.partnerships.title':'જવાબદાર ભાગીદારી','pillars.partnerships.desc':'શેર્ડ ડેશબોર્ડ અને સ્વચ્છ વીજ ખરીદી.',
      'nl.title':'ન્યૂઝલેટર જોડાઓ','nl.desc':'સસ્ટેનેબિલિટી અપડેટ્સ.',
      'nl.email':'ઈમેલ','nl.submit':'સુરક્ષિત સબ્સ્ક્રાઇબ','nl.help':'અમે તમારું સબમિશન એન્ક્રિપ્ટ કરીએ છીએ.','nl.invalid':'માન્ય ઈમેલ નાખો.',
      'modal.title':'સબ્સ્ક્રિપ્શન થયું','modal.body':'પુષ્ટિ માટે ઈમેલ તપાસો.','modal.close':'બંધ કરો',
      'footer.note':'Intel થી પ્રેરિત શૈક્ષણિક પ્રોજેક્ટ.'
    }
  };

  const languages = [
    { code:'en', label:'English' },
    { code:'ar', label:'العربية' },
    { code:'es', label:'Español' },
    { code:'hi', label:'हिन्दी' },
    { code:'gu', label:'ગુજરાતી' }
  ];

  /* DOM */
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const indicator = document.querySelector('.tab-indicator');
  const status = document.querySelector('.filter-status');
  const cards = Array.from(document.querySelectorAll('.card'));
  const jumpLive = document.getElementById('jump-live');
  const langSelect = document.getElementById('langSelect');

  function moveIndicator(activeBtn){
    if(!activeBtn || !indicator) return;
    indicator.style.width = `${activeBtn.offsetWidth}px`;
    indicator.style.height = `${activeBtn.offsetHeight}px`;
    indicator.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
  }
  function getLang(){ return localStorage.getItem('lang') || 'en'; }

  function activateFilter(filterValue, announce=true){
    const targetTab = tabs.find(t=>t.dataset.filter===filterValue) || tabs[0];
    tabs.forEach(t=>t.classList.remove('is-active'));
    targetTab.classList.add('is-active');
    moveIndicator(targetTab);

    const conf = i18n[getLang()];
    const tabLabel = targetTab.textContent.trim();
    status.textContent = conf.status(tabLabel);

    cards.forEach(card=>{
      const show = (filterValue==='all') || (card.dataset.category===filterValue);
      card.style.display = show ? '' : 'none';
      card.classList.remove('pulse-outline');
    });
    if(announce && jumpLive) jumpLive.textContent = conf.status(tabLabel);
  }

  /* set language, now also applying data-i18n-html */
  function setLang(lang){
    localStorage.setItem('lang', lang);
    const conf = i18n[lang] || i18n.en;

    document.documentElement.lang = lang;
    document.documentElement.dir  = conf.dir || 'ltr';

    // plain text/HTML content (innerText/innerHTML as string)
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const val = conf[key];
      if(typeof val === 'string') el.innerHTML = val;
    });

    // rich HTML blocks (lists)
    document.querySelectorAll('[data-i18n-html]').forEach(el=>{
      const key = el.getAttribute('data-i18n-html');
      const val = conf[key];
      if(typeof val === 'string') el.innerHTML = val;
    });

    // relabel tabs
    tabs.forEach(t=>{
      const k = 'tabs.' + (t.dataset.filter || 'all');
      if(conf[k]) t.textContent = conf[k];
    });
    moveIndicator(document.querySelector('.tab.is-active') || tabs[0]);

    // status line
    const activeTab = document.querySelector('.tab.is-active') || tabs[0];
    if(activeTab) status.textContent = conf.status(activeTab.textContent.trim());

    // chips
    document.querySelectorAll('.chip').forEach(ch=>{
      const cat = ch.closest('.card')?.dataset.category;
      if(cat && conf.chips?.[cat]) ch.textContent = conf.chips[cat];
    });

    // keep email LTR
    const email = document.getElementById('nl-email');
    if(email) email.dir = 'ltr';
  }

  // language dropdown
  if(langSelect){
    langSelect.innerHTML='';
    languages.forEach(({code,label})=>{
      const opt=document.createElement('option');
      opt.value=code; opt.textContent=label; langSelect.appendChild(opt);
    });
  }
  const initialLang = getLang();
  if(langSelect) langSelect.value = initialLang;
  setLang(initialLang);
  langSelect?.addEventListener('change', ()=> setLang(langSelect.value));

  // indicator init
  const startTab = document.querySelector('.tab.is-active') || tabs[0];
  moveIndicator(startTab);
  if(document.fonts && document.fonts.ready){
    document.fonts.ready.then(()=> moveIndicator(document.querySelector('.tab.is-active') || tabs[0]));
  }
  window.addEventListener('load', ()=> moveIndicator(document.querySelector('.tab.is-active') || tabs[0]));
  window.addEventListener('resize', ()=> moveIndicator(document.querySelector('.tab.is-active')));

  // tab clicks
  tabs.forEach(tab=>{
    tab.addEventListener('click', ()=> activateFilter(tab.dataset.filter));
  });

  // flip / tilt
  cards.forEach(card=>{
    const inner=card.querySelector('.card-inner');
    const openBtn=card.querySelector('.flip-btn');
    const closeBtn=card.querySelector('.flip-close');
    if(!inner||!openBtn||!closeBtn) return;

    const flipOpen=()=>{ inner.classList.add('is-flipped'); openBtn.setAttribute('aria-expanded','true'); setTimeout(()=>closeBtn.focus(),220); };
    const flipClose=()=>{ inner.classList.remove('is-flipped'); openBtn.setAttribute('aria-expanded','false'); setTimeout(()=>openBtn.focus(),220); };

    openBtn.addEventListener('click',flipOpen);
    closeBtn.addEventListener('click',flipClose);
    openBtn.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); flipOpen(); }});
    closeBtn.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); flipClose(); }});

    const media = card.querySelector('.card-front .media');
    if(media) media.addEventListener('click', flipOpen);

    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if(!isTouch){
      card.addEventListener('mousemove', e=>{
        if(inner.classList.contains('is-flipped')) return;
        const r=card.getBoundingClientRect();
        const px=(e.clientX-r.left)/r.width, py=(e.clientY-r.top)/r.height;
        inner.style.setProperty('--tilt-x', ((0.5-py)*6).toFixed(2)+'deg');
        inner.style.setProperty('--tilt-y', ((px-0.5)*8).toFixed(2)+'deg');
      });
      card.addEventListener('mouseleave', ()=>{
        if(inner.classList.contains('is-flipped')) return;
        inner.style.setProperty('--tilt-x','0deg');
        inner.style.setProperty('--tilt-y','0deg');
      });
    }
  });

  // jump buttons
  document.querySelectorAll('.jump-to-timeline').forEach(link=>{
    link.addEventListener('click', ()=>{
      activateFilter(link.dataset.filter);
      const tl=document.getElementById('timeline');
      if(tl) tl.scrollIntoView({behavior:'smooth', block:'start'});
      const h=document.getElementById('tl-head'); if(h) setTimeout(()=>h.focus({preventScroll:true}),450);
      setTimeout(()=>{
        const first=cards.find(c=>c.style.display!=='none');
        if(first){ first.classList.add('pulse-outline'); setTimeout(()=>first.classList.remove('pulse-outline'),1600); }
      },500);
    });
  });

  // newsletter
  const form=document.getElementById('nl-form');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const lang=getLang();
      if(!form.checkValidity()){
        form.classList.add('was-validated');
        document.getElementById('nl-live').textContent=i18n[lang]['nl.invalid'];
        return;
      }
      const modalEl=document.getElementById('thanksModal');
      if(modalEl && window.bootstrap){ new window.bootstrap.Modal(modalEl).show(); }
      document.getElementById('nl-live').textContent='OK';
      form.reset(); form.classList.remove('was-validated');
    });
  }
});
