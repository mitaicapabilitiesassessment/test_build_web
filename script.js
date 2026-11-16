// ==========================================================================
// TRỊNH HOÀI ĐỨC - PERSONAL PORTFOLIO INTERACTIVITY & BILINGUAL (VI / EN)
// ==========================================================================

const translations = {
  vi: {
    header_role: "Sales Capability Development Manager",
    nav_about: "Về tôi",
    nav_capabilities: "Năng lực",
    nav_achievements: "Thành tựu",
    nav_experience: "Kinh nghiệm",
    nav_contact: "Liên hệ",
    btn_cv_short: "Tải CV",
    hero_eyebrow: "PHARMA & HEALTHCARE EXPOSURE • FIELD FORCE DEVELOPMENT • SALES TRAINING • 11+ YEARS",
    hero_title_1: "Trịnh Hoài Đức",
    hero_title_2: "Sales Capability Development Leader",
    hero_summary:
      "Chuyên gia Quản lý Đào tạo & Phát triển Năng lực Kinh doanh với hơn <strong>11 năm kinh nghiệm</strong> đa ngành: <strong>Insurtech, Điện tử tiêu dùng, Bán lẻ và Dược phẩm</strong>. Chuyển hóa các mục tiêu thương mại thành chương trình nâng cao năng lực tuyến đầu thông qua Phân tích nhu cầu đào tạo (TNA), Khung năng lực, Đào tạo sản phẩm & kỹ năng bán hàng, Train-the-Trainer, Huấn luyện thực địa (OJT) và Đánh giá hiệu suất cho khoảng <strong>1.000 học viên mỗi quý</strong>.",
    location_text: "TP. Hồ Chí Minh / Bình Dương",
    btn_connect: "LIÊN HỆ HỢP TÁC",
    btn_download_cv: "TẢI HỒ SƠ (PDF)",
    badge_exp: "Kinh nghiệm thực chiến",
    badge_learners: "Học viên / Quý",
    badge_team: "Quản lý đội ngũ Vùng & L&D",
    sec3_tag: "Quy trình phát triển năng lực",
    sec3_title: "Chuyển hóa mục tiêu thương mại thành hiệu suất vượt trội",
    step1_title: "TNA & Khung Năng Lực",
    step1_desc:
      "Phân tích nhu cầu đào tạo (TNA), đánh giá khoảng trống năng lực (Gap Assessment) và phân tích công việc (Job-Task Analysis) để thiết kế lộ trình năng lực bám sát KPI kinh doanh.",
    step2_title: "Đào Tạo Đa Kênh & Mobile LMS",
    step2_desc:
      "Xây dựng giáo trình Onboarding, Sales Playbooks, Battlecards, video Microlearning và triển khai tính năng Đào tạo di động (IZIon24 Agent App) cho ~1.000 học viên/quý.",
    step3_title: "Field Coaching & Đánh Giá",
    step3_desc:
      "Đồng hành huấn luyện thực địa (OJT), Sales Shadowing, chuẩn hóa kịch bản xử lý từ chối, kiểm chuẩn chất lượng (QC Calibration) và đo lường hiệu quả sau đào tạo bằng Assessment Rubrics.",
    sec4_tag: "Về bản thân tôi",
    sec4_title: "Trải nghiệm đa ngành<br />Từ thực chiến đến Lãnh đạo L&D",
    sec4_desc1:
      "Khởi đầu từ vị trí Trình dược viên OTC (Hoa Thiên Phú Pharma) và Quản lý Khách hàng Trọng điểm (Vivo Vietnam - phụ trách Thế Giới Di Động, Viettel Store, Viễn Thông A), tôi thấu hiểu sâu sắc áp lực doanh số và bài toán thực thi tại điểm bán.",
    sec4_desc2:
      "Trải qua hành trình dẫn dắt đội ngũ 8 Giảng viên vùng tại Honor Vietnam, Đào tạo khu vực tại Xiaomi, Trưởng nhóm Đào tạo kiêm QC dự án Abbott Nutrition CRM (Transcosmos), Chuyên gia Cao cấp Phát triển Năng lực tại FE CREDIT và hiện là <strong>Sales Capability Development Lead tại Ideal Life JSC (IZIon24)</strong>.",
    btn_connect_now: "KẾT NỐI NGAY",
    stat_years: "Năm kinh nghiệm",
    stat_learners: "Học viên / Quý",
    stat_industries: "Ngành mũi nhọn",
    pillar1_title: "Tuyến đầu & Kênh phân phối",
    pillar1_desc:
      "Nâng cao năng lực thực chiến cho đội ngũ Direct Sales, Telesales, Trình dược viên, Promoters và mạng lưới Đối tác/Nhà phân phối trên toàn quốc.",
    pillar2_title: "Chương trình & Công cụ Đào tạo",
    pillar2_desc:
      "Thiết kế đồng bộ Competency Frameworks, Onboarding Curricula, Product Playbooks, Sales Battlecards, Video Microlearning và Mobile App Learning.",
    pillar3_title: "Quản trị Vận hành & Chất lượng",
    pillar3_desc:
      "Vận hành đào tạo khép kín, phối hợp liên phòng ban (Sales, HR, Digital Product, IT, Finance), chuẩn hóa SLA và tiêu chí đánh giá chất lượng (QC/Rubrics).",
    sec5_tag: "Năng lực chuyên môn",
    sec5_title: "Năng lực cốt lõi & Đội ngũ đào tạo tinh nhuệ",
    sec5_lead:
      "6 nhóm năng lực trọng tâm giúp chuẩn hóa quy trình bán hàng, rút ngắn thời gian hội nhập và thúc đẩy tỷ lệ chuyển đổi doanh số.",
    cap1_sub: "Phát triển năng lực đội ngũ thị trường, chuỗi bán lẻ & nhà phân phối.",
    cap2_sub: "Phân tích nhu cầu đào tạo (TNA) & xác định khoảng trống kỹ năng.",
    cap3_sub: "Đào tạo kỹ năng bán hàng, hội nhập nhân sự mới & tung sản phẩm.",
    cap4_sub: "Đào tạo giảng viên nội bộ & dẫn dắt đội ngũ L&D / Regional Trainers.",
    cap5_sub: "Huấn luyện thực địa (OJT), Sales Shadowing & kèm cặp sau đào tạo.",
    cap6_sub: "Xây dựng bộ tiêu chí đánh giá chuẩn hóa & đo lường hiệu quả.",
    cap_card1_title: "Insurtech & Consumer Finance",
    cap_card1_desc:
      "Hoạch định chiến lược năng lực kinh doanh, thiết kế tính năng Đào tạo trên Mobile App IZIon24 (2025), Sales Battlecards & kịch bản xử lý từ chối cho Direct Sales/Telesales.",
    cap_card2_title: "Pharma & Healthcare CRM",
    cap_card2_desc:
      "Quản lý vận hành đào tạo & kiểm chuẩn chất lượng (QC Calibration) theo tiêu chuẩn SLA của Abbott Nutrition, kết hợp kinh nghiệm thực tiễn quản lý địa bàn Dược phẩm OTC.",
    cap_card3_title: "Consumer Tech & Retail Chains",
    cap_card3_desc:
      "Dẫn dắt đội ngũ 8 giảng viên vùng, tổ chức Bootcamp & OJT tại điểm bán, và quản lý đối tác chiến lược Thế Giới Di Động (MWG), Viettel Store, Viễn Thông A.",
    sec6_tag: "Thành tựu & Dự án",
    sec6_title: "Dấu ấn đổi mới sáng tạo và thành tích kinh doanh thực chiến",
    ach1_title: "Digital Capability Innovation",
    ach1_desc:
      "Chủ trì lên ý tưởng, thiết kế cấu trúc nội dung và triển khai thành công tính năng Đào tạo di động trên ứng dụng <strong>IZIon24 Agent App</strong>, mở rộng quy mô học tập linh hoạt trên toàn mạng lưới nhà phân phối.",
    ach2_title: "Company-Wide Contribution Award",
    ach2_desc:
      "Được vinh danh Giải thưởng Cống hiến cấp Công ty (Contribution Award) nhờ sự tận tâm, thiết lập tiêu chuẩn chất lượng giảng dạy xuất sắc và dẫn dắt thành công các dự án phối hợp liên phòng ban.",
    ach3_title: "National Retail Sales Excellence",
    ach3_desc:
      "Đạt hạng <strong>#2 Toàn Quốc</strong> khối hệ thống chuỗi bán lẻ (Key Account) về thành tích sản lượng Sell-in năm 2016 thông qua tối ưu trưng bày, tồn kho và chương trình thúc đẩy bán hàng tại MWG, Viettel Store.",
    ach4_title: "Regional Pharmaceutical Sales Performance | Hoa Thiên Phú Pharma (2014)",
    ach4_desc:
      "Đạt <strong>Top 3 Doanh Số khu vực Đông Nam Bộ</strong> cho dòng sản phẩm chủ lực <em>Hoàng Tố Nữ</em> thông qua quản lý hiệu quả hệ thống nhà thuốc OTC và thúc đẩy chương trình Sell-out.",
    sec7_tag: "Hành trình sự nghiệp",
    sec7_title: "Hơn 11 năm phát triển năng lực đội ngũ & tăng trưởng thương mại",
    tier1_name: "Field Sales & Regional Training",
    tier1_f1: "Quản lý & huấn luyện 8 Giảng viên vùng (Honor)",
    tier1_f2: "Đào tạo OJT, Store Audit & Video Toolkit (Xiaomi)",
    tier1_f3: "Quản lý Key Account MWG, Viettel Store (Vivo)",
    tier1_f4: "Quản lý địa bàn nhà thuốc OTC (Hoa Thiên Phú)",
    tier2_name: "Sales Capability Leadership",
    tier2_period: "2022 – Hiện tại (Mũi nhọn)",
    tier2_f1: "Hoạch định chiến lược năng lực & dẫn dắt L&D Team",
    tier2_f2: "Ra mắt tính năng Đào tạo trên IZIon24 App (2025)",
    tier2_f3: "Xây dựng Khung năng lực, Playbooks & Battlecards",
    tier2_f4: "TNA, Field Coaching & Đánh giá hiệu suất toàn diện",
    tier3_name: "CRM Training & QC Leader",
    tier3_f1: "Quản lý Đào tạo & QC dự án Abbott Nutrition CRM",
    tier3_f2: "Phân tích Job-Task Analysis & Giám sát chất lượng",
    tier3_f3: "Thiết kế chương trình Onboarding & Refresher",
    tier3_f4: "Đảm bảo tuân thủ chuẩn mực thương hiệu & SLA",
    timeline_heading: "Chi tiết Kinh nghiệm Công tác (2014 – Hiện tại)",
    r1_b1:
      "Dẫn dắt chiến lược phát triển năng lực kinh doanh cho nhân viên khối văn phòng và mạng lưới đối tác/nhà phân phối bên ngoài, chuyển hóa các ưu tiên kinh doanh thành lộ trình năng lực gắn liền với mục tiêu thương mại.",
    r1_b2:
      "Giám sát vận hành đào tạo toàn diện (end-to-end) tiếp cận khoảng 1.000 học viên mỗi quý, đảm bảo tiêu chuẩn giảng dạy đồng nhất và theo dõi sau đào tạo.",
    r1_b3:
      "Chủ trì thiết kế end-to-end, cấu trúc nội dung và triển khai tính năng Đào tạo trên ứng dụng IZIon24 Agent App (2025), mở rộng mô hình học tập di động phân quyền trên các kênh bán hàng.",
    r1_b4:
      "Xây dựng khung năng lực bán hàng, giáo trình hội nhập (onboarding), cẩm nang sản phẩm (product playbooks), bộ tiêu chí đánh giá (assessment rubrics) và kho video microlearning.",
    r1_b5:
      "Trực tiếp dẫn dắt và cố vấn nhóm 2 chuyên viên Phát triển Năng lực; phối hợp chặt chẽ với Sales, HR, Digital Product, IT và Finance.",
    r1_b6:
      "Thực hiện đi thực địa (field visits), sales shadowing và huấn luyện tuyến đầu để xác định khoảng trống năng lực, tinh chỉnh kịch bản tư vấn và xử lý từ chối.",
    r2_b1:
      "Thực hiện phân tích nhu cầu đào tạo (TNA) có cấu trúc cho đội ngũ Direct Sales và Telesales, chuyển hóa khoảng trống năng lực thành các học phần kỹ năng bán hàng và xử lý từ chối mục tiêu.",
    r2_b2:
      "Xây dựng khung huấn luyện sau đào tạo, Sales Battlecards và bộ tiêu chí đánh giá chuẩn hóa nhằm củng cố việc tuân thủ kịch bản và duy trì kiến thức.",
    r3_b1:
      "Dẫn dắt hoạt động đào tạo, lộ trình hội nhập và hiệu chuẩn chất lượng (QC calibration) cho đội ngũ tổng đài viên chăm sóc khách hàng dinh dưỡng Abbott Nutrition.",
    r3_b2:
      "Thực hiện phân tích công việc (Job-Task Analyses) và giám sát chất lượng tương tác khách hàng để phát hiện lỗ hổng kiến thức; triển khai các học phần đào tạo nhắc lại (refresher modules) đảm bảo tuân thủ thương hiệu.",
    r3_b3:
      "Quản lý lịch đào tạo, quy trình briefing và chia sẻ điển hình tốt (best practices) đáp ứng cam kết SLA và tiêu chuẩn chất lượng của Abbott.",
    r4_b1:
      "Lập kế hoạch và trực tiếp đứng lớp các buổi hội thảo năng lực bán hàng, huấn luyện tại cửa hàng và OJT cho đội ngũ PG/Promoters và nhân viên bán hàng nhà phân phối khu vực miền Nam.",
    r4_b2:
      "Thực hiện kiểm tra cửa hàng (store audits), quan sát kỹ năng tư vấn (sales-pitch observations) và phân tích khoảng trống; sản xuất video đào tạo số và bộ công cụ ra mắt sản phẩm chuẩn hóa.",
    r5_b1:
      "Quản lý và huấn luyện đội ngũ 8 Giảng viên hiện trường vùng, giám sát lịch trình, phân bổ ngân sách và theo dõi KPI giảng viên trên các chuỗi bán lẻ trọng điểm.",
    r5_b2:
      "Đồng bộ các chương trình can thiệp đào tạo với Giám đốc Bán hàng Vùng và Quản lý Vận hành Bán lẻ, gắn kết với chỉ tiêu sell-out, tỷ lệ chuyển đổi và lộ trình ra mắt sản phẩm.",
    r5_b3:
      "Tổ chức các hội thảo tung sản phẩm mới, chương trình Bootcamp cho Giám sát bán lẻ và huấn luyện thực địa.",
    r6_b1:
      "Quản lý quan hệ đối tác bán lẻ chiến lược với Thế Giới Di Động (MWG), Viettel Store và Viễn Thông A; đồng bộ chương trình khuyến mãi và bổ sung hàng hóa nhằm thúc đẩy sell-in và tuân thủ trưng bày.",
    r6_b2:
      "Phối hợp chặt chẽ với Chuỗi cung ứng (Supply Chain), Trade Marketing và bộ phận quản lý Promoter để giải quyết vướng mắc thương mại, duy trì sức khỏe tồn kho và đạt dự báo doanh số tháng.",
    r7_b1:
      "Quản lý hệ thống khách hàng nhà thuốc OTC trên địa bàn được giao, giới thiệu các dòng sản phẩm chăm sóc sức khỏe và thực thi kế hoạch tuyến bán hàng (sales route plans) bài bản.",
    r7_b2:
      "Thu thập thông tin thị trường và đối thủ cạnh tranh, theo dõi chương trình khuyến mãi thương mại (trade promotions) và hỗ trợ thúc đẩy doanh số sell-out tại nhà thuốc.",
    edu_heading: "Học vấn & Phát triển Chuyên môn",
    edu_bba: "Cử nhân Quản trị Kinh doanh (BBA)",
    edu_bba_sub: "Nền tảng vững chắc về Quản trị Kinh doanh, Thương mại và Phát triển Tổ chức.",
    cert_heading: "Chứng chỉ & Đào tạo Quản lý",
    lang_heading: "Ngôn ngữ & Năng lực Số",
    lang_vi: "Tiếng Việt (Vietnamese)",
    lang_en: "Tiếng Anh (English - TOEIC 665)",
    cta_title: "Giải pháp toàn diện giúp nâng tầm năng lực đội ngũ kinh doanh",
    cta_desc:
      "Sự kết hợp giữa hơn 11 năm kinh nghiệm thực chiến đa ngành, tư duy hệ thống trong thiết kế khung năng lực và đổi mới sáng tạo với Mobile LMS & GenAI. Tôi rất mong được hợp tác và đóng góp vào sự bứt phá doanh số của doanh nghiệp bạn.",
    btn_cta_yellow: "LIÊN HỆ NGAY",
    footer_address: "Địa chỉ: TP. Hồ Chí Minh / Bình Dương, Việt Nam",
    popup_title: "Kết nối với Trịnh Hoài Đức",
    popup_sub: "Để lại thông tin liên hệ hoặc trao đổi trực tiếp qua Điện thoại / Email",
    popup_btn: "GỬI THÔNG TIN LIÊN HỆ"
  },
  en: {
    header_role: "Sales Capability Development Manager",
    nav_about: "About Me",
    nav_capabilities: "Capabilities",
    nav_achievements: "Achievements",
    nav_experience: "Experience",
    nav_contact: "Contact",
    btn_cv_short: "Download CV",
    hero_eyebrow: "PHARMA & HEALTHCARE EXPOSURE • FIELD FORCE DEVELOPMENT • SALES TRAINING • 11+ YEARS",
    hero_title_1: "Trinh Hoai Duc",
    hero_title_2: "Sales Capability Development Manager",
    hero_summary:
      "Sales Training and Capability Development Leader with <strong>11+ years of experience</strong> across <strong>Insurtech, Consumer Electronics, Retail and Pharmaceutical Sales</strong>. Experienced in translating commercial priorities into frontline capability programs through Training Needs Analysis (TNA), competency frameworks, product and sales training, Train-the-Trainer, field coaching (OJT), and performance assessment. Led an 8-member regional training team and currently leads a 2-member L&D team, overseeing learning operations for approximately <strong>1,000 unique learners per quarter</strong>.",
    location_text: "Ho Chi Minh City / Binh Duong",
    btn_connect: "GET IN TOUCH",
    btn_download_cv: "DOWNLOAD CV (PDF)",
    badge_exp: "Cross-Industry Experience",
    badge_learners: "Unique Learners / Quarter",
    badge_team: "Regional & L&D Leadership",
    sec3_tag: "Capability Development Process",
    sec3_title: "Translating Commercial Priorities into Frontline Excellence",
    step1_title: "TNA & Competency Frameworks",
    step1_desc:
      "Conduct structured Training Needs Analysis (TNA), Gap Assessments, and Job-Task Analyses to build competency roadmaps directly aligned with commercial KPIs.",
    step2_title: "Omnichannel & Mobile Learning",
    step2_desc:
      "Design onboarding curricula, product playbooks, battlecards, video microlearning, and decentralized mobile learning (IZIon24 Agent App) reaching ~1,000 learners/quarter.",
    step3_title: "Field Coaching & Evaluation",
    step3_desc:
      "Deliver in-store OJT, sales shadowing, objection-handling refinement, QC calibration, and standardized assessment rubrics to ensure lasting behavior change.",
    sec4_tag: "About Me",
    sec4_title: "Cross-Industry Track Record<br />From Frontline Sales to L&D Leadership",
    sec4_desc1:
      "Starting from direct Pharmaceutical Field Sales (Hoa Thien Phu Pharma) and Key Account Management (Vivo Vietnam — managing MWG, Viettel Store, Vien Thong A), I bring deep empathy for frontline commercial realities and channel execution.",
    sec4_desc2:
      "Progressed through leading an 8-member regional training team at Honor Vietnam, Regional Trainer at Xiaomi, Training cum QC Team Leader for Abbott Nutrition’s CRM Contact Center (Transcosmos), Senior Sales Capability Specialist at FE CREDIT, and currently <strong>Sales Capability Development Lead at Ideal Life JSC (IZIon24)</strong>.",
    btn_connect_now: "CONNECT NOW",
    stat_years: "Years Experience",
    stat_learners: "Learners / Qtr",
    stat_industries: "Core Sectors",
    pillar1_title: "Frontline & Channel Enablement",
    pillar1_desc:
      "Empowering corporate sales, telesales, pharmaceutical reps, retail promoters, and external distributor/partner networks nationwide.",
    pillar2_title: "Curriculum & Digital Innovation",
    pillar2_desc:
      "Developing end-to-end sales competency frameworks, onboarding curricula, product playbooks, battlecards, video microlearning, and mobile LMS.",
    pillar3_title: "Operations & Quality Governance",
    pillar3_desc:
      "Aligning capability initiatives across Sales, HR, Digital Product, IT & Finance while enforcing strict SLAs, QC calibration, and assessment rubrics.",
    sec5_tag: "Role-Relevant Capabilities",
    sec5_title: "Core Capabilities & High-Impact Training Execution",
    sec5_lead:
      "Six role-relevant capability pillars designed to standardize sales execution, accelerate onboarding, and drive measurable conversion growth.",
    cap1_sub: "Enabling retail chains, field sales forces, and external distributor networks.",
    cap2_sub: "Structured TNA & job-task analysis to pinpoint frontline skill gaps.",
    cap3_sub: "End-to-end onboarding curricula, product playbooks, and launch workshops.",
    cap4_sub: "Mentoring L&D teams and regional field trainers with clear KPI tracking.",
    cap5_sub: "Field visits, sales shadowing, OJT, and objection-handling script refinement.",
    cap6_sub: "Standardized evaluation rubrics, QC calibration, and post-training follow-up.",
    cap_card1_title: "Insurtech & Consumer Finance",
    cap_card1_desc:
      "Leading sales capability strategy, IZIon24 Agent App Training rollout (2025), sales battlecards, and objection-handling modules for Direct Sales & Telesales.",
    cap_card2_title: "Pharma & Healthcare CRM",
    cap_card2_desc:
      "Managing training operations & QC calibration for Abbott Nutrition’s CRM contact center alongside direct OTC pharmaceutical territory management.",
    cap_card3_title: "Consumer Tech & Retail Chains",
    cap_card3_desc:
      "Leading 8 regional field trainers, retail supervisor bootcamps, OJT, and strategic key account relationships with MWG, Viettel Store & Vien Thong A.",
    sec6_tag: "Selected Achievements",
    sec6_title: "Recognized Innovation & Commercial Performance",
    ach1_title: "Digital Capability Innovation",
    ach1_desc:
      "Led conceptualization, content structuring, and launch of the mobile Training feature on the <strong>IZIon24 Agent App (2025)</strong>, extending learning delivery across the distributor network.",
    ach2_title: "Company-Wide Contribution Award",
    ach2_desc:
      "Received the company-wide Contribution Award at Ideal Life (2023) for dedication, training delivery standards, and cross-functional project success.",
    ach3_title: "National Retail Sales Excellence",
    ach3_desc:
      "Ranked <strong>#2 Nationwide</strong> across retail chain accounts at Vivo Vietnam (2016) for annual product sell-in volume achievement.",
    ach4_title: "Regional Pharmaceutical Sales Performance | Hoa Thien Phu Pharma (2014)",
    ach4_desc:
      "Achieved a <strong>Top-3 sales ranking across the Southeast region</strong> for the <em>Hoang To Nu</em> product line through structured pharmacy route execution.",
    sec7_tag: "Career Progression",
    sec7_title: "11+ Years Building Frontline Capability & Commercial Growth",
    tier1_name: "Field Sales & Regional Training",
    tier1_f1: "Managed 8 regional field trainers (Honor Vietnam)",
    tier1_f2: "Delivered OJT, store audits & video toolkits (Xiaomi)",
    tier1_f3: "Managed MWG, Viettel Store key accounts (Vivo)",
    tier1_f4: "Managed OTC pharmacy territories (Hoa Thien Phu)",
    tier2_name: "Sales Capability Leadership",
    tier2_period: "2022 – Present (Current Focus)",
    tier2_f1: "Lead sales capability strategy & 2-member L&D team",
    tier2_f2: "Rolled out IZIon24 Agent App Training feature (2025)",
    tier2_f3: "Built competency frameworks, playbooks & battlecards",
    tier2_f4: "End-to-end TNA, field coaching & rubric evaluation",
    tier3_name: "CRM Training & QC Leader",
    tier3_f1: "Led Training & QC for Abbott Nutrition CRM project",
    tier3_f2: "Conducted job-task analyses & quality monitoring",
    tier3_f3: "Implemented onboarding & targeted refresher modules",
    tier3_f4: "Maintained strict Abbott client SLAs & compliance",
    timeline_heading: "Detailed Professional Experience (2014 – Present)",
    r1_b1:
      "Lead sales capability strategy for corporate employees and external distributor/partner networks, translating business priorities into capability roadmaps aligned with commercial objectives.",
    r1_b2:
      "Oversee end-to-end training operations reaching approximately 1,000 unique learners per quarter, ensuring consistent delivery standards and post-training follow-up.",
    r1_b3:
      "Led the end-to-end design, content structuring and rollout of the Training feature on the IZIon24 Agent App (2025), enabling scalable, decentralized mobile learning across sales channels.",
    r1_b4:
      "Develop sales competency frameworks, onboarding curricula, product playbooks, assessment rubrics and video-based microlearning resources to strengthen frontline sales capabilities.",
    r1_b5:
      "Lead and mentor a 2-member Sales Capability team; collaborate with Sales, HR, Digital Product, IT and Finance to align capability initiatives with business and operational priorities.",
    r1_b6:
      "Conduct field visits, sales shadowing and frontline coaching to identify capability gaps and execution barriers, while refining sales conversations and customer objection-handling scripts.",
    r2_b1:
      "Conducted structured TNA for direct sales and telesales teams, translating capability gaps into targeted selling-skills and objection-handling modules.",
    r2_b2:
      "Built post-training coaching frameworks, sales battlecards and standardized evaluation rubrics to reinforce script adherence and knowledge retention.",
    r3_b1:
      "Led training operations, onboarding curricula and QC calibration for frontline agents supporting Abbott Nutrition’s consumer nutrition contact center.",
    r3_b2:
      "Conducted job-task analyses and monitored customer interaction quality to identify knowledge gaps; implemented targeted refresher modules to uphold brand compliance.",
    r3_b3:
      "Managed training schedules, briefing routines and best-practice sharing in line with Abbott client SLAs and quality standards.",
    r4_b1:
      "Planned and delivered sales capability workshops, in-store coaching and OJT for regional retail promoters and distributor sales forces.",
    r4_b2:
      "Conducted store audits, sales-pitch observations and gap analyses; produced digital training videos and standardized product-launch toolkits.",
    r5_b1:
      "Managed and coached an 8-member regional training team, overseeing schedules, budget allocation and trainer KPI tracking across major retail key accounts.",
    r5_b2:
      "Aligned training interventions with Regional Sales and Retail Operations Managers, channel sell-out, conversion targets and product-launch roadmaps.",
    r5_b3:
      "Facilitated product-launch workshops, retail supervisor bootcamps and field coaching programs.",
    r6_b1:
      "Managed strategic retail partner relationships with The Gioi Di Dong (MWG), Viettel Store and Vien Thong A, aligning sales promotions and stock replenishment to support sell-in and retail display compliance.",
    r6_b2:
      "Worked with Supply Chain, Trade Marketing and promoter operations to resolve trade issues, maintain stock health and meet monthly sales forecasts.",
    r7_b1:
      "Managed OTC pharmaceutical accounts across assigned territories, introduced healthcare formulations to pharmacy clients and executed structured sales route plans.",
    r7_b2:
      "Collected competitor field intelligence, monitored trade promotions and supported pharmacy sell-out acceleration.",
    edu_heading: "Education & Professional Development",
    edu_bba: "Bachelor of Business Administration (BBA)",
    edu_bba_sub: "University of Economics Ho Chi Minh City (UEH), 2010–2014.",
    cert_heading: "Executive & Digital Certifications",
    lang_heading: "Languages & Digital Acumen",
    lang_vi: "Vietnamese",
    lang_en: "English (TOEIC 665 / Business Fluency)",
    cta_title: "Ready to Elevate Your Frontline Sales Capability?",
    cta_desc:
      "Combining 11+ years of cross-industry sales & training leadership, structured competency architecture, and mobile learning innovation. Let’s connect to discuss how I can contribute to your organization’s commercial growth.",
    btn_cta_yellow: "CONTACT ME NOW",
    footer_address: "Location: Ho Chi Minh City / Binh Duong, Vietnam",
    popup_title: "Connect with Trinh Hoai Duc",
    popup_sub: "Leave a message or reach out directly via Phone / Email",
    popup_btn: "SEND MESSAGE"
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.vi;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const btnVi = document.getElementById("btnLangVi");
  const btnEn = document.getElementById("btnLangEn");
  if (btnVi && btnEn) {
    btnVi.classList.toggle("active", lang === "vi");
    btnEn.classList.toggle("active", lang === "en");
  }
}

// Modal Popup Controls
function openContactModal() {
  const modal = document.getElementById("contactModal");
  if (modal) {
    modal.classList.add("active");
  }
}

function closeContactModal() {
  const modal = document.getElementById("contactModal");
  if (modal) {
    modal.classList.remove("active");
  }
}

function handleLeadSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("inputName").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  const phone = document.getElementById("inputPhone").value.trim();
  const note = document.getElementById("inputNote").value.trim();

  const thankYou = document.getElementById("thankYouMsg");
  if (thankYou) {
    thankYou.style.display = "block";
  }

  const subject = encodeURIComponent(`[Website Portfolio] Liên hệ từ ${name}`);
  const body = encodeURIComponent(
    `Xin chào anh Trịnh Hoài Đức,\n\nHọ tên / Đơn vị: ${name}\nEmail: ${email}\nSố điện thoại: ${phone}\nNội dung trao đổi: ${note || "Trao đổi cơ hội hợp tác / tuyển dụng"}\n`
  );

  setTimeout(() => {
    window.location.href = `mailto:trinhduc.k36@gmail.com?subject=${subject}&body=${body}`;
  }, 600);
}

// Close modal on outside click or Escape key
window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contactModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeContactModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeContactModal();
    }
  });

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }
});
