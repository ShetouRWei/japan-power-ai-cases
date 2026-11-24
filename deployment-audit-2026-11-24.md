# 全案例算力部署查核（2026-11-24）

查核範圍：案例001–080。逐案閱讀既有案例內容，重訪每案已列來源的前3個連結（不足3個則全部），並針對部署線索補查官方公告與產品說明。此為公開資料盤點，並非各電力公司的實體資產或採購稽核。

判定原則：地端需明示本地／on-premises／閉域本地模型等；雲端需有本案服務或架構依據；混合部署指已明示現地控制與雲端服務並存的整體架構，並不表示每個AI模型均同時在兩端運行。只確認資料上雲、API、網頁介面、閉域連線、產品支援選項或供應商雲端能力，均不足以判定本案全部AI算力位置。

「未揭露」表示目前查核資料不足以判定，包含僅揭露部分資料平台、來源失效或存取受限的情況；不表示一定沒有地端或雲端。查核日期僅適用部署欄位，不代表每案所有成熟度與成效均重新追查至該日期。

統計：地端 1 案、雲端 15 案、混合部署 2 案、未揭露 62 案，共 80 案。

範圍提醒：006的雲端證據只適用對外商品版；015只確認雲端影像管理，AI位置仍未揭露；045的雲端證據適用新客服平台；047的雲端證據僅適用Qast部分。024與069的混合指整體系統架構。

## 逐案結果

| 案例 | 部署判定 | 判定範圍與說明 | 來源 |
|---|---|---|---|
| 案例 001｜東京電力 PG、東京瓦斯網路與 NTT 東日本以無人機共同點檢橋下基礎設施 | 未揭露 | 僅確認無人機取像與三方影像共享；AI使用及影像處理的地端／雲端位置皆未揭露。 | [查核來源](https://www.tepco.co.jp/pg/company/press-information/press/2022/1664321_8617.html) |
| 案例 002｜東北電力與 MCD3 開發「會議助理 AI 解決方案」 | 未揭露 | 公告說明會議語音、文字與生成式AI處理流程，未揭露模型訓練／推論的承載位置。 | [查核來源](https://www.tohoku-epco.co.jp/dx/case/01/) |
| 案例 003｜北陸電力以影像 AI「B-Alert」自動偵測並通報熊等野生動物 | 雲端 | 通信相機把影像送至雲端AI判斷目標動物，再通知相關人員；相機為取像端。 | [查核來源](https://www.rikuden.co.jp/press/attach/26072902.pdf) |
| 案例 004｜北陸電力集團以 AI 預測水壩入流量並優化五座水壩運行 | 未揭露 | 已確認AI入流預測與水壩最佳運用；未明示預測模型及最佳化引擎的地端／雲端部署。 | [查核來源](https://www.hg-c.co.jp/proposal/advanced/#a01_1) |
| 案例 005｜北電技術顧問以影像 AI 驗證混凝土裂縫自動量測 | 雲端 | 採用的「ひびみっけ」服務將照片上傳富士軟片雲端，完成影像合成及裂縫解析；屬服務端雲端處理。 | [查核來源](https://www.fujifilm.com/jp/ja/business/inspection/infraservice/hibimikke/features) |
| 案例 006｜東北電力以「職災防止 AI」支援火力發電廠現場安全管理 | 未揭露 | 東北電力內部版的運算位置未揭露；TOiNX對外商品版明示建置於雲端、各客戶使用獨立環境，不能據此認定內部版架構相同。 | [查核來源](https://prtimes.jp/main/html/rd/p/000000009.000086088.html) |
| 案例 007｜東北電力以自主移動機器人與 AI 自動巡檢上越火力發電廠 | 雲端 | 上越火力機器人取得影像及振動資料後自動傳至雲端，由巡檢支援服務分析並通知中央控制室。 | [查核來源](https://www.tohoku-epco.co.jp/dx/case/05/) |
| 案例 008｜東北電力網路以無人機與 AI 偵測輸電鐵塔螺栓、螺帽異常 | 雲端 | 現場無人機影像上傳雲端環境，由AI偵測螺栓／螺帽異常並產生點檢報告。 | [查核來源](https://www.tohoku-epco.co.jp/dx/case/07/) |
| 案例 009｜東北電力以 ASYOMI 提前偵測設備異常兆候 | 未揭露 | 可確認以閉域網路傳送設備資料並提供遠端監視服務；未明示AI伺服器位於電廠、服務商資料中心或雲端。訂閱服務及免建伺服器不足以判定公有雲。 | [查核來源](https://solution-next.tohoku-epco.co.jp/solution/detail/id=250) |
| 案例 010｜北陸電力導入 Teachme Biz，以生成式 AI 製作及集中管理作業手冊 | 雲端 | 導入Teachme Biz雲端手冊製作與共享服務，於該服務中使用生成式AI；底層模型與雲端區域未揭露。 | [查核來源](https://prtimes.jp/main/html/rd/p/000000152.000032315.html) |
| 案例 011｜東北電力與 EQUES 研究事業創出部門專用的投影片生成 AI | 未揭露 | 部門專用投影片生成AI的運算環境未揭露；雙方其他GPU雲端合作與本案部署不可直接畫上等號。 | [查核來源](https://eques.co.jp/works/tohoku-denryoku-slide-ai/) |
| 案例 012｜東北電力 Frontier 以 AI 驅動開發建置電力契約簡易申請表 | 未揭露 | 本案AI驅動開發工具的運算位置未揭露；DQS一般產品說明列有AWS等支援，不代表本案AI工具或申請表已採相同部署。 | [查核來源](https://www.shiftinc.jp/news/20260310_tohoku_epco_frontier/) |
| 案例 013｜中部電力 Power Grid 以 AI 控制長野電網電壓與無效功率 | 未揭露 | 已說明離線學習、線上VQC控制及雙廠商冗餘；「離線」指學習階段，不等同已公開地端硬體部署。 | [查核來源](https://www.chuden.co.jp/corporate/dx/sustainable/vol03/) |
| 案例 014｜中部電力以三種 AI 最佳化飛驒川水系水力發電計畫 | 未揭露 | 三種AI的預測、計畫及控制功能已公開，未揭露模型訓練與推論的地端／雲端位置。 | [查核來源](https://www.chuden.co.jp/corporate/dx/sustainable/vol05/) |
| 案例 015｜中部電力 Power Grid 以 POWER GRID Check、無人機與 AI 巡檢送變電設備 | 未揭露 | 已確認照片、飛行紀錄與管理應用位於雲端；即時異常偵測及高解析影像AI各自的推論位置未明示，故不判為全案雲端AI。 | [查核來源](https://www.chuden.co.jp/recruit/challengers/article/07.html) |
| 案例 016｜中部電力與 Career Survival 開發 AI Manual Coach，從作業影片生成手冊並可視化熟練技能 | 未揭露 | 公告及產品頁揭露影片轉手冊、技能可視化功能，未明示本案模型的承載環境。 | [查核來源](https://www.chuden.co.jp/publicity/press/1218041_3273.html) |
| 案例 017｜九州電力以 ReNom Power 自動最佳化火力與抽蓄發電供需計畫 | 未揭露 | 九州電力專案公告未明示AI最佳化引擎承載位置；ReNom Power一般SaaS產品介紹不代表客製專案的實際架構。 | [查核來源](https://gridpredict.jp/news/20260422) |
| 案例 018｜九州電力以 AI 自動制定苓北、松浦燃煤電廠的煤炭收付計畫 | 未揭露 | 已公開兩座燃煤電廠的AI收付計畫系統，未明示最佳化運算在電廠地端、公司機房或雲端執行。 | [查核來源](https://gridpredict.jp/news/20250916) |
| 案例 019｜北海道電力 Network 與 Grid 開發 AI 北海道區域週間供需計畫系統 | 未揭露 | 專案公告未揭露週間計畫系統的地端／雲端位置；不能僅由ReNom Power的一般SaaS供應方式推定本案部署。 | [查核來源](https://gridpredict.jp/news/20250630) |
| 案例 020｜北海道電力導入 LegalOn，以 AI 支援採購契約審查與知識傳承 | 雲端 | 北海道電力公告採用LegalOn Cloud，契約上傳服務平台並執行AI審查與知識管理；底層雲端供應商及區域未揭露。 | [查核來源](https://legalontech.jp/8874/) |
| 案例 021｜北陸電力子公司 HISS 以 lingo 驗證程式碼生成與障礙處理 RAG | 未揭露 | lingo程式碼生成及RAG的PoC未明示運算位置；HISS具有資料中心／雲端服務業務不代表本案採其自有算力。 | [查核來源](https://finance.stockweather.co.jp/contents/dispPDF.aspx?disclosure=20251014572448) |
| 案例 022｜關西電力以 AI 製作火力發電所系統隔離手順書 | 未揭露 | 系統隔離手順書AI的模型、推論位置與訓練環境未揭露；同一DX報告的其他上雲措施不能套用本案。 | [查核來源](https://www.kepco.co.jp/corporate/pdf/dx_report_2026.pdf) |
| 案例 023｜關西電力與 Azbil 共同開發 BiG EYES plus，擴大火力設備異常預兆監視 | 未揭露 | 已公開BiG EYES plus的運轉資料分析與異常預兆功能，未明示本案AI的地端／雲端承載。 | [查核來源](https://www.kepco.co.jp/energy_supply/energy/thermal_power/kvacs/new-initiatives/ai_provision.html) |
| 案例 024｜關西電力以「おまかSave-Air」AI 自動控制商用空調 | 混合部署 | 系統架構包含現場控制用電腦及雲端管理／可視化服務；AI自動調校的訓練與推論分工未分別揭露。此處混合係指控制與管理架構。 | [查核來源](https://www.kenes.jp/search2/) |
| 案例 025｜關西電力以 MyRefer 推動全公司員工推薦招募（AI 使用待確認） | 未揭露 | MyRefer導入及招募流程已公開，但本案AI實際使用仍待確認，AI算力部署亦未揭露。 | [查核來源](https://prtimes.jp/main/html/rd/p/000000278.000036924.html) |
| 案例 026｜中國電力以 AI 最佳化三隅發電所煤炭混燒與筒倉運用 | 未揭露 | 煤炭混燒及筒倉最佳化引擎的地端／雲端位置未公開；在三隅發電所使用不等於在廠內運算。 | [查核來源](https://www.energia.co.jp/press/2025/16196.html) |
| 案例 027｜中國電力以 tsuzumi 2 建置電力業務專用 LLM | 未揭露 | tsuzumi 2專用LLM的實際建置位置未揭露；模型可支援地端或閉域的產品能力不能證明中國電力本案配置。 | [查核來源](https://www.energia.co.jp/assets/press/2025/p20260126.pdf) |
| 案例 028｜中國電力以自走機器人、IoT與AI驗證三隅發電所智慧巡檢 | 雲端 | 機器人及固定式IoT設備將資料送至雲端，公告明示對雲端保存的影像進行AI數值化；其他預兆模型的獨立承載位置未分別揭露。 | [查核來源](https://www.ntt.com/about-us/area-info/article/20260728.html) |
| 案例 029｜中國電力、Enecom與廣島大學共同研究 AI 短期電力需求預測 | 未揭露 | AI短期需求預測共同研究未公開訓練及推論運算環境；合作方具有雲端能力不足以判定本案。 | [查核來源](https://www.enecom.co.jp/information/3563/) |
| 案例 030｜四國電力以 FAST-D 異常聲音偵測 AI 支援設備監視 | 未揭露 | FAST-D產品可連接雲端及遠端監視，但四國電力本案聲音AI的實際推論位置未明示。 | [查核來源](https://prtimes.jp/main/html/rd/p/000000193.000033941.html) |
| 案例 031｜四國電力以無人機、AI 與影像診斷驗證火力電廠土木建築設備點檢 | 未揭露 | 已確認無人機取像與AI影像診斷試行，未明示照片解析是在地端或雲端執行。 | [查核來源](https://www.yonden.co.jp/corporate/dx/dx_09.html) |
| 案例 032｜四國電力以 AI 與數位分身最佳化電力供需計畫 | 未揭露 | 四國電力專案公開情境分析與發電最佳化流程，未揭露本案ReNom Power引擎的實際承載位置。 | [查核來源](https://www.yonden.co.jp/corporate/dx/dx_08.html) |
| 案例 033｜四國電力規劃以五感感測器與 AI 強化水力發電設備保守點檢 | 未揭露 | 五感感測器及水力AI保全屬規劃／開發內容，未揭露本案AI算力；集團DX示意中的CLOUD不能視為本案架構。 | [查核來源](https://www.yonden.co.jp/corporate/dx/dx_07.html) |
| 案例 034｜四國電力導入 AI 水壩入流量預測支援放流判斷 | 未揭露 | 已公開水壩入流量AI預測與放流判斷支援，未說明模型訓練／推論的部署位置。 | [查核來源](https://www.yonden.co.jp/corporate/dx/dx_06.html) |
| 案例 035｜四國電力以運轉資料 AI 與熱影像 AI 提早偵測火力設備異常 | 未揭露 | 已公開運轉資料及熱影像兩類AI分析，未分別揭露其地端、邊緣或雲端運算位置。 | [查核來源](https://www.yonden.co.jp/corporate/dx/dx_05.html) |
| 案例 036｜四國電力送配電以影像辨識 AI 自動偵測配電設備上的烏鴉巢 | 未揭露 | 巡視影像的烏鴉巢辨識流程已公開，但未明示AI在車載端、事業所或雲端執行。 | [查核來源](https://www.yonden.co.jp/nw/safety/initiative/ai.html) |
| 案例 037｜中國電力網路以光纖振動感測與 AI 預測送電容量及支援設備保全 | 未揭露 | OPGW光纖感測及容量預測AI已公開；量測裝置的安裝位置不能直接證明AI模型的運算位置。 | [查核來源](https://www.energia.co.jp/nw/press/assets/2026/np20260415.pdf) |
| 案例 038｜九州電力送配電以 AI 無人機自動拍攝約 1.5 萬座輸電鐵塔 | 未揭露 | AI在巡檢過程即時辨識礙子並控制拍攝，未說明推論於機載、操控端或其他伺服器執行。 | [查核來源](https://prtimes.jp/main/html/rd/p/000000297.000020194.html) |
| 案例 039｜九州電力以 QT-GenAI 驗證多模型生成式 AI 與企業知識 RAG | 雲端 | QT-GenAI透過Azure OpenAI及Google Cloud等模型平台提供推論；九州電力案例確認單租戶環境，但專屬區域及模型配置未揭露。閉域連線不等同地端。 | [查核來源](https://www.and-dot.co.jp/news/0011) |
| 案例 040｜沖繩電力以市民拍攝、遠端診斷與 AI 驗證電力／通信電柱共同點檢 | 未揭露 | 已說明市民上傳照片、遠端診斷及AI驗證，但未明示AI推論的實體／雲端位置。 | [查核來源](https://news.mynavi.jp/article/20260209-4074789/) |
| 案例 041｜東京電力 Energy Partner 以 SEEDS 整合18個客服中心並以生成式 AI 摘要及檢查通話 | 雲端 | SEEDS以AWS Amazon Connect、S3等建置，生成式AI流程透過Lambda與Amazon Bedrock執行。既有地端受電系統是汰換背景，不是本案AI地端證據。 | [查核來源](https://aws.amazon.com/jp/blogs/news/tepcoep-contact-center-cx/) |
| 案例 042｜TEPCO Renewable Power 以 AI 加速多水壩聯合運用模擬 | 未揭露 | 多水壩聯合運用模擬與AI加速的模型承載環境未公開；模擬及電廠應用場域不等於部署位置。 | [查核來源](https://www.tepco.co.jp/about/about-dx/dx_case/case-16.html) |
| 案例 043｜東京電力 Power Grid 以影像、異音 AI 與數位分身推動智慧變電所 | 未揭露 | 已確認變電所感測、影像／聲音AI與3D資料整合，未逐項明示AI伺服器的地端／雲端位置。 | [查核來源](https://www.tepco.co.jp/about/about-dx/dx_case/case-11.html) |
| 案例 044｜東京電力 Power Grid 以自動飛行無人機與多模型 AI 點檢輸電設備 | 未揭露 | 無人機自動飛行、航線平台及多模型影像解析已公開，未分別明示AI推論的機載、地端或雲端位置。 | [查核來源](https://www.tepco.co.jp/about/about-dx/dx_case/case-7.html) |
| 案例 045｜東京電力 Energy Partner 以 AI Chat 與生成式 AI 提升客服 CX／EX | 雲端 | AWS公告可確認客服生成式AI摘要與檢查使用Amazon Connect、Lambda及Bedrock；此判定適用新客服平台，不延伸至早期AI Chat全部功能。 | [查核來源](https://aws.amazon.com/jp/blogs/news/tepcoep-contact-center-cx/) |
| 案例 046｜東京電力以「安全なう」生成式 AI 辨識作業現場潛在風險 | 未揭露 | 安全なう的多模態輸入及生成式AI風險評估已公開，未明示模型供應商或地端／雲端承載。 | [查核來源](https://www.tepco.co.jp/about/about-dx/dx_case/case-20.html) |
| 案例 047｜東京電力以 RAG 與 Qast 將原子力及土木暗默知識轉為組織知識 | 雲端 | Qast部分可確認為雲端知識管理服務；東京電力其他核能／土木RAG平台的模型推論位置未揭露，不能以Qast概括全部子系統。 | [查核來源](https://qast.jp/usecase/issue03/) |
| 案例 048｜東京電力 Power Grid 以高解析用電資料 AI 預測認知功能下降 | 未揭露 | 高解析用電資料與認知功能預測AI研究未明示模型訓練、推論及資料處理的部署位置。 | [查核來源](https://www.tepco.co.jp/about/about-dx/dx_case/case-8.html) |
| 案例 049｜東京電力以 RPA、生成式 AI 與 OCR 改造集團共享後勤服務 | 未揭露 | 共享後勤服務的RPA、生成式AI與OCR各子系統未分別揭露承載位置，不能由自動化工具名稱推定。 | [查核來源](https://www.tepco.co.jp/about/about-dx/dx_case/case-5.html) |
| 案例 050｜JERA 以 AI Agent「Emily」傳承火力發電所營運與維修知識 | 未揭露 | 報導確認以ChatGPT結合業界與內部維修知識，但未明示Emily採直接雲端服務、Azure或其他企業環境。 | [查核來源](https://www.nikkan.co.jp/articles/view/770042) |
| 案例 051｜JERA 投資 Emerald AI，探索資料中心 AI 工作負載與電網協同運行 | 未揭露 | 本案為JERA策略投資與合作探索，未揭露JERA自身部署；Emerald AI的資料中心產品定位不代表JERA已使用其算力。 | [查核來源](https://www.jera.co.jp/news/information/20260826_2490) |
| 案例 052｜JERA G-DAC 以 AI 預兆偵測與運轉最佳化監視全球火力發電設備 | 雲端 | G-DAC的IoT與AI平台建置於AWS，使用IoT Core、Lambda、Kinesis及SageMaker；Direct Connect閉域連線仍連向AWS雲端。 | [查核來源](https://aws.amazon.com/jp/solutions/case-studies/jera-case-study/) |
| 案例 053｜J-POWER 統籌 AI 資料中心工作負載移轉與廣域全光網路實證 | 未揭露 | 共同研究涉及多座資料中心與跨區AI工作負載移轉，未明示各站算力所有權、公有雲／私有雲配置及正式部署；不以分散式資料中心直接判定混合雲。 | [查核來源](https://www.jpower.co.jp/news/2026/04/news260422.html) |
| 案例 054｜J-POWER 以自研 AI「JPPredict」與巡檢機器人提升水力發電維護 | 未揭露 | 設備資料經網路保存於集中管理伺服器，再由JPPredict分析；來源未明示該伺服器為公司機房地端或託管／雲端。 | [查核來源](https://www.jpower.co.jp/company_info/rd/co2_free/hydropower_digital_maintenance.html) |
| 案例 055｜關西電力全公司導入 ChatGPT Enterprise 並以生成 AI Champion 推動業務改革 | 雲端 | 導入OpenAI提供的ChatGPT Enterprise企業服務；可確認此服務的雲端使用型態，未揭露企業資料區域及其他內部AI系統位置。 | [查核來源](https://media.kepco.co.jp/project/17840975) |
| 案例 056｜東京電力以生成式 AI 將水力發電所水壩管理暗默知識可視化 | 未揭露 | 水壩管理知識可視化的生成式AI／RAG承載位置未公開，未證實使用地端LLM或特定雲端。 | [查核來源](https://www.tepco.co.jp/rp/about/company/press-information/press/2026/pdf/260515j0101.pdf) |
| 案例 057｜關電工以 AI 與規則混合系統將設備工程概算時間縮至數十分鐘 | 未揭露 | 公告只將「既有系統」描述為地端，未明示新AI概算系統的部署；不能把舊系統位置沿用到新案。 | [查核來源](https://www.ulsconsulting.co.jp/news/press/2026-07-30.html) |
| 案例 058｜九州電力與 neoAI 建置部門專用生成式 AI 並深化資本業務合作 | 未揭露 | 九州電力與neoAI的合作公告未明示部門專用AI的實際承載；neoAI產品可有多種提供方式，不能套用任一方案。 | [查核來源](https://www.kyuden.co.jp/press/2026/h260709-1.html) |
| 案例 059｜北海道電力以 AI FAQ「てるみん」改善社內 IT 服務台並串接 Teams | 未揭露 | 北海道電力案例確認OHGAI與Teams串接，未明示AI引擎承載位置；使用Teams不代表AI部署在Microsoft雲端。 | [查核來源](https://dx.nid.co.jp/cases/hepco) |
| 案例 060｜北海道電力以 EtaPRO 即時偵測兩座火力機組的故障與性能下降兆候 | 雲端 | 北海道電力與東芝ESS明示將EtaPRO系統建置於東芝ESS雲端，以定額長期服務契約運用。 | [查核來源](https://www.hepco.co.jp/info/2022/1251922_1920.html) |
| 案例 061｜九州電力以無人機與影像 AI 檢查水壩遮水壁並降低約40%成本 | 未揭露 | 已公開無人機取像及OPTiM影像AI診斷，未明示本次水壩遮水壁AI在地端或雲端執行。 | [查核來源](https://www.kyuden.co.jp/press/2022/57330.html) |
| 案例 062｜九電集團與 LiveEO 以衛星資料解析 AI 實證送電線周邊巡視點檢 | 未揭露 | 衛星資料AI監測實證未揭露本案的訓練、解析與服務平台位置；衛星取像不代表AI位於衛星或雲端。 | [查核來源](https://www.kyuden.co.jp/press/2025/h250424-1.html) |
| 案例 063｜四國電力以自律飛行無人機與 AI 巡檢三座水力發電所 | 未揭露 | 影像保存於SENSYN CORE Datastore並可遠端確認，但本案未明示資料平台及AI推論的實際地端／雲端位置。 | [查核來源](https://www.sensyn-robotics.com/news/yonden) |
| 案例 064｜關西電力以自走機器人與 AI 驗證堺港火力發電所自動巡檢 | 未揭露 | 機器人拍攝、熱影像與聲音AI巡檢的承載位置未公開；現場有機器人不代表AI全部在機載端運算。 | [查核來源](https://www.kepco.co.jp/corporate/pr/2020/0825_1j.html) |
| 案例 065｜關西電力以影像 AI 自動偵測水力取水壩流冰與積雪 | 未揭露 | 取水壩攝影影像交由AI判斷流冰與積雪，未明示分析伺服器的地端／雲端位置。 | [查核來源](https://www.kepco.co.jp/corporate/pr/2019/0926_4j.html) |
| 案例 066｜北海道電力以 ReNom Power 最佳化火力與53座水力發電設施供需計畫 | 未揭露 | 北海道電力火力／水力需給計畫系統的AI引擎運算位置未明示；ReNom Power一般產品供應形態不代表本案。 | [查核來源](https://www.hepco.co.jp/info/2024/1252543_2023.html) |
| 案例 067｜關西電力以最佳化 AI 將舞鶴燃煤電廠燃料計畫由4小時縮至30分鐘 | 未揭露 | 舞鶴發電所燃料最佳化專案未明示Optium引擎的運算位置；不由網頁介面推定雲端。 | [查核來源](https://www.kepco.co.jp/corporate/pr/2019/pdf/0205_1j_01.pdf) |
| 案例 068｜東北電力以影像 AI 診斷輸電鐵塔腐蝕並將計畫工時由25小時降至4小時 | 未揭露 | 手機／無人機取像、AI判級與集中資料庫管理已公開，未說明手機是否本地推論或傳送伺服器解析。 | [查核來源](https://www.tohoku-epco.co.jp/pastnews/normal/1204579_1049.html) |
| 案例 069｜關西電力以 SenaSon AI 預測並控制太陽光、蓄電池等分散式能源 | 混合部署 | SenaSon架構包含現地控制設備與雲端連動，官方稱為雲端型控制系統；AI預測與現場控制的個別運算分工未完整揭露。 | [查核來源](https://sol.kepco.jp/useful/taiyoko/w/smart-factory/) |
| 案例 070｜中國電力以 AI Concierge 自動受理電力契約電話並提升8%應答率 | 未揭露 | 已確認AI語音自動受理及後台資料連動，但中國電力本案的語音辨識／對話引擎部署未明示。 | [查核來源](https://www.enecom.co.jp/business/officedx/case/energia_aic.html) |
| 案例 071｜北陸電力以 Optium 最佳化燃煤海運配船與採購成本 | 未揭露 | 燃煤海運配船最佳化專案未明示Optium引擎的地端／雲端位置；不以一般產品方案代替本案證據。 | [查核來源](https://www.rikuden.co.jp/press/attach/24112601.pdf) |
| 案例 072｜東京電力福島第一核電廠除役研發 Physical AI 四足機器人執行高輻射區自主調查 | 未揭露 | 高輻射區Physical AI機器人仍屬研發與驗證，未明示模型訓練及現場推論的運算配置。 | [查核來源](https://www.kufusha.com/information/p008442/) |
| 案例 073｜沖繩電力以 Box AI 與 Box Hubs 建立企業知識問答及災害應變平台 | 雲端 | 採Box雲端內容平台、Box AI及Box Hubs提供文件管理與問答；不把舊檔案伺服器或其他內部系統視為本案地端AI。 | [查核來源](https://japan.box.com/case/okiden) |
| 案例 074｜關西電力以生成式AI與無人機辨識火力電廠循環水管腐蝕風險 | 未揭露 | 公告只說明AI解析使用API，未公開模型供應商及運算位置；API本身不足以判定雲端或地端。 | [查核來源](https://avilen.jp/news/529062/) |
| 案例 075｜九電無人機服務與OPTiM開發枯木偵測AI並於JR西日本沿線驗證 | 未揭露 | 管理軟體及OPTiM影像解析服務的實際推論位置未公開，未明示雲端、地端或邊緣處理。 | [查核來源](https://www.kyuden-drone.co.jp/news/2025/07/drone-ai.html) |
| 案例 076｜關西電力集團Dshift以無人機與AI推動洋上風機巡檢及雷電導線測試 | 未揭露 | Local 5G只確認影像可傳至陸域確認與解析，未明示AI在邊緣、地端或雲端執行。 | [查核來源](https://www.innovation.sugitec.net/28408/) |
| 案例 077｜東京電力創投與Eurus以SkySpecs無人機及AI檢查170部風機葉片 | 未揭露 | 本次SkySpecs無人機點檢的AI分析位置未明示；供應商其他平台產品不直接視為本案已使用。 | [查核來源](https://aismiley.co.jp/ai_news/tepco-eurus-energy-ai-drone/) |
| 案例 078｜J-POWER與ACES以影像AI偵測電廠作業人員接近危險區域及高處不安全行為 | 未揭露 | 沿用J-POWER既有攝影機系統，但未明示影像AI位於攝影機邊緣端、場站地端或雲端。 | [查核來源](https://acesinc.co.jp/projects/project-1681) |
| 案例 079｜關西電力與Athena以完全閉域本地LLM控制四足機器人執行發電所巡檢PoC | 地端 | 完全閉域／無外部通信，採NVIDIA DGX Spark執行語音辨識、本地LLM及行動生成等推論；公開案例提及2個GPU的資源分配。 | [查核來源](https://athenatech.jp/case/kepco-physicalai-poc) |
| 案例 080｜九州電力與FastLabel在火力電廠開發巡視點檢機器人基礎模型 | 未揭露 | 未明示機器人基礎模型訓練或推論採雲端、電廠地端、機載邊緣設備或閉域網路。 | [查核來源](https://www.nedo.go.jp/koubo/CD3_100434.html) |

## 來源存取紀錄

本輪批次重訪 202 個案例來源連結；成功取得 185 個，其餘為HTTP錯誤或逾時。PDF另以pypdf抽取文字；圖像型附件及重要架構圖另作視覺核對。跨案例可能重複訪問相同URL，此處以案例／來源配對計數。

| 案例 | 來源 | 本輪存取結果 |
|---|---|---|
| 017 | [來源](https://www.kyuden.co.jp/press/2026/h260422-1.html) | HTTP 403；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |
| 019 | [來源](https://bizzine.jp/article/detail/11757) | HTTP 403；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |
| 037 | [來源](https://global.fujitsu/ja-JP/pr/news/2026/04/15-01) | HTTP 429；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |
| 039 | [來源](https://www.qtpro.jp/qt-genai/blog/07.html) | HTTP 404；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |
| 039 | [來源](https://www.kyuden.co.jp/var/rev0/0729/8516/communication_book_2025_all.pdf) | HTTP 403；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |
| 048 | [來源](https://www.energy-gateway.co.jp/news/2021/10/01.html) | HTTP 404；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |
| 048 | [來源](https://www.energy-gateway.co.jp/news/2024/10/mci-1.html) | HTTP 404；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |
| 050 | [來源](https://www.nikkan.co.jp/articles/view/770042) | HTTP 404；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |
| 058 | [來源](https://www.kyuden.co.jp/press/2026/h260709-1.html) | HTTP 403；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |
| 058 | [來源](https://www.kyuden.co.jp/var/rev0/0880/2100/4v3mpkLL.pdf) | HTTP 403；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |
| 061 | [來源](https://www.kyuden.co.jp/press/2022/57330.html) | HTTP 403；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |
| 062 | [來源](https://www.kyuden.co.jp/press/2025/h250424-1.html) | HTTP 403；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |
| 068 | [來源](https://www.tohoku.meti.go.jp/koho/report/pdf/2021/7.pdf) | HTTP 403；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |
| 073 | [來源](https://www.okiden.co.jp/ir/management/) | HTTP 403；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |
| 075 | [來源](https://www.kyuden.co.jp/press/2024/h240329b-1.html) | HTTP 403；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |
| 080 | [來源](https://www.kyuden.co.jp/press/2026/h260909-1.html) | HTTP 403；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |
| 080 | [來源](https://www.kyuden.co.jp/var/rev0/0912/8747/p3UYftMa.pdf) | HTTP 403；保留既有摘錄，不以無法取得推定未使用AI或任何部署型態 |

補充核對：006 TOiNX、003北陸電力新公司公告附圖、024關電能源方案服務列表、039 QT-GenAI開發商說明、041／045 AWS架構、069官方SenaSon介紹等；相關連結已直接列於各案部署欄位。

