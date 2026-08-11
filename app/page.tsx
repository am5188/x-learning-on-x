import { Eq, Katex } from "@/components/Katex";
import { Bullet, Card, Section } from "@/components/Section";

const nav = [
  { href: "#question", label: "问题" },
  { href: "#objective", label: "目标" },
  { href: "#algorithms", label: "算法" },
  { href: "#loop", label: "主循环" },
  { href: "#results", label: "结果" },
  { href: "#cost", label: "成本" },
  { href: "#pause", label: "暂停" },
];

const metrics = [
  { label: "粉丝快照", value: "~18", hint: "净增约 +6" },
  { label: "日净增", value: "~1.4", hint: "达标需 ~3.2" },
  { label: "高曝光回复", value: "24", hint: "浏览 ≥300" },
  { label: "重复关系", value: "~4", hint: "目标 10" },
  { label: "可重复路径", value: "2", hint: "目标已触线" },
  { label: "决策调用", value: "1700+", hint: "量级估计" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 bg-hero-radial" />
      <div
        className="pointer-events-none fixed inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 0%, black, transparent)",
        }}
      />

      <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-violet text-xs font-bold text-ink-950">
              XL
            </span>
            <span className="hidden font-display text-sm font-semibold text-white sm:inline">
              X Learning Lab
            </span>
          </a>
          <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <a
              href="https://x.com/esan7_m"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink-950 transition hover:bg-neon-cyan"
            >
              @esan7_m
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero */}
        <section className="pb-10 pt-16 sm:pb-16 sm:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="chip">公开 AI 实验</span>
                <span className="chip">持续学习</span>
                <span className="chip text-amber-200/90">云端阶段已暂停</span>
              </div>
              <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                在 X 上做
                <span className="bg-gradient-to-r from-neon-cyan via-white to-neon-violet bg-clip-text text-transparent">
                  {" "}
                  AI 持续学习
                </span>
                <br />
                运营实验
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-ink-300 sm:text-lg">
                真人社交是最硬的测试场：上下文不完整、有情绪、有声誉、反馈公开且不可撤销。
                本实验不伪装成人涨粉，而是检验 AI 能否在这种环境里
                <strong className="font-medium text-white">
                  {" "}
                  持续改进并提高合格净增粉
                </strong>
                。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#algorithms"
                  className="rounded-full bg-gradient-to-r from-neon-cyan to-cyan-400 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-glow transition hover:brightness-110"
                >
                  看公开算法公式
                </a>
                <a
                  href="#pause"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  为什么暂停云端
                </a>
              </div>
              <p className="mt-6 text-sm text-ink-400">
                账号 @esan7_m · 实验窗口约 2026-08-04 起 · 2026-08-12 暂停云端调度
              </p>
            </div>

            <Card className="relative overflow-hidden">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-neon-violet/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-neon-cyan/20 blur-3xl" />
              <div className="relative">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neon-violet">
                  Live Scoreboard Snapshot
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-white/10 bg-ink-950/40 p-4"
                    >
                      <div className="text-[11px] uppercase tracking-wider text-ink-400">
                        {m.label}
                      </div>
                      <div className="metric-value mt-1 text-2xl sm:text-3xl">
                        {m.value}
                      </div>
                      <div className="mt-1 text-xs text-ink-400">{m.hint}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-5 text-ink-400">
                  读数为暂停时近似快照，用于对照而非最终结论。目标：100 合格粉 /
                  10 重复关系 / 2 条可归因可重复路径。
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Question */}
        <Section id="question" eyebrow="01 · Research Question" title="研究问题">
          <Card>
            <p className="text-lg leading-8 text-ink-100">
              在 X 这种不完整上下文、有情绪、有声誉、反馈公开且不可撤销的环境里，
              <span className="text-white">
                一个 AI 运营系统能否通过持续学习，稳定提高「合格净增粉」？
              </span>
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["感知", "能否读全帖子、父帖、链接正文再说话？"],
                ["决策", "能否在安全约束下选择对象与动作，而不是关键词乱点？"],
                ["学习", "被纠错或结果为负后，能否改写规则并影响下一轮？"],
                ["增长", "规则改变能否体现在合格粉丝净增与可重复路径上？"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-2xl border border-white/10 bg-ink-950/50 p-4"
                >
                  <div className="text-sm font-semibold text-neon-cyan">{k}</div>
                  <div className="mt-2 text-sm leading-6 text-ink-300">{v}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-400">
              账号身份公开为 AI 实验，不伪装成人。对错允许；忽略纠错、不更新系统不允许。
            </p>
          </Card>
        </Section>

        {/* Objective */}
        <Section
          id="objective"
          eyebrow="02 · Objective"
          title="目标函数（后半程校正）"
        >
          <p>
            前期一度把「学习是否发生」写得过像北极星。中后期校正为：
            <strong className="text-white"> 增长是目标，学习是提高增长效率的引擎</strong>
            。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <h3 className="mb-4 font-display text-lg text-white">分层定义</h3>
              <ul className="space-y-3">
                <Bullet>
                  <strong className="text-white">核心目标</strong>
                  ：合格净增粉（稳定读数）
                </Bullet>
                <Bullet>
                  <strong className="text-white">学习</strong>
                  ：优化器——改选人 / 深读 / 语域 / 跟进 / 修复
                </Bullet>
                <Bullet>
                  <strong className="text-white">中间量</strong>
                  ：曝光、对话、主页到达、关系、可重复路径
                </Bullet>
                <Bullet>
                  <strong className="text-white">约束</strong>
                  ：安全红线、粉质、at-most-once、焦点保护、休息窗
                </Bullet>
                <Bullet>
                  <strong className="text-white">不算目标</strong>
                  ：动作数、点赞、空转、「服务在跑」
                </Bullet>
              </ul>
            </Card>
            <Card>
              <h3 className="mb-4 font-display text-lg text-white">在线优化语义</h3>
              <Eq
                tex={String.raw`\max_{a \in \mathcal{U}}\; \widehat{\mathbb{E}}\!\left[\Delta F_{\mathrm{qualified}}^{(24h)}\mid a,\mathrm{memory},\mathrm{funnel}\right]`}
                caption="在可用动作集合上，近似最大化 24h 合格净增粉期望"
              />
              <p className="text-sm text-ink-300">
                约束：安全门禁、粉质、不重试 ambiguous、不抢用户焦点。
                学习系统不直接“预测粉”，而是维护可执行策略与课，使动作分布更偏向历史上能转化的区域。
              </p>
            </Card>
          </div>
        </Section>

        {/* Algorithms */}
        <Section
          id="algorithms"
          eyebrow="03 · Open Algorithms"
          title="可公开的核心公式"
        >
          <p>
            不是端到端黑盒 RL，而是
            <strong className="text-white">
              {" "}
              外部记忆 + 无状态 LLM 策略 + 硬门禁投影 + 结果回写
            </strong>
            。下列公式与实现一一对应，可审计、可复现。
          </p>

          <Card className="space-y-2">
            <h3 className="font-display text-xl text-white">（1）增长目标函数</h3>
            <p className="text-sm text-ink-300">
              基线粉 <Katex tex={String.raw`F_0`} />，当前粉{" "}
              <Katex tex={String.raw`F_t`} />，目标粉 <Katex tex={String.raw`F^*`} />
              ，已过天数 <Katex tex={String.raw`T`} />，剩余天数{" "}
              <Katex tex={String.raw`T_{\mathrm{rem}}`} />：
            </p>
            <Eq
              tex={String.raw`
              \begin{aligned}
              \mathrm{Net}_t &= F_t - F_0 \\
              v_t &= \frac{\mathrm{Net}_t}{\max(T,\varepsilon)} \\
              v^{\mathrm{need}}_t &= \frac{\max(0, F^* - F_t)}{\max(T_{\mathrm{rem}},\varepsilon)} \\
              \mathrm{OnTrack}_t &= \mathbf{1}\!\left[\mathrm{Net}_t>0 \,\wedge\, v_t \ge v^{\mathrm{need}}_t\right] \\
              \mathrm{Progress}_t &= \frac{\mathrm{Net}_t}{\max(F^*-F_0,\varepsilon)}
              \end{aligned}
              `}
            />
            <Eq
              tex={String.raw`F_t \ge F^* \;\wedge\; R_{\mathrm{rep}} \ge 10 \;\wedge\; P_{\mathrm{path}} \ge 2`}
              caption="阶段验收：粉数、重复关系、可重复路径同时满足"
            />
          </Card>

          <Card className="mt-6 space-y-2">
            <h3 className="font-display text-xl text-white">
              （2）可重复增长路径计数
            </h3>
            <Eq
              tex={String.raw`
              \begin{aligned}
              A_{\mathrm{reply}} &= \big|\{e\in\mathcal{E}^+: \exists\,\mathrm{touch}(e)=\mathrm{reply}\wedge \mathrm{views}\ge 100\}\big| \\
              A_{\mathrm{post}} &= \big|\{e\in\mathcal{E}^+: \exists\,\mathrm{touch}(e)=\mathrm{post}\wedge \mathrm{views}\ge 50\}\big| \\
              A_{\mathrm{follow}} &= \big|\{e\in\mathcal{E}^+: \exists\,\mathrm{touch}(e)=\mathrm{follow}\}\big| \\
              P_{\mathrm{path}} &= \mathbf{1}[A_{\mathrm{reply}}\ge 2] + \mathbf{1}[A_{\mathrm{post}}\ge 2] + \mathbf{1}[A_{\mathrm{follow}}\ge 2]
              \end{aligned}
              `}
            />
          </Card>

          <Card className="mt-6 space-y-2">
            <h3 className="font-display text-xl text-white">（3）曝光候选分</h3>
            <p className="text-sm text-ink-300">
              年龄小时 <Katex tex="a" />，作者粉 <Katex tex="f" />，赞/回/转{" "}
              <Katex tex="L,R,RT" />，关系分 <Katex tex={String.raw`s_{\mathrm{rel}}`} />
              。只做证据排序，最终是否回复由模型 plan 决定。
            </p>
            <Eq
              tex={String.raw`
              \begin{aligned}
              \mathrm{Fresh} &= \max(0,\,50-15a) \\
              \mathrm{Reach} &= \min\!\big(35,\,7\log_{10}\max(10,f)\big) \\
              \mathrm{Disc} &= \min\!\big(25,\,4\log_2(2+L+3R+2\,RT)\big) \\
              \mathrm{Crowd} &= \min(25,\,R/4) \\
              \mathrm{Exposure}(x) &= \mathrm{Fresh}+\mathrm{Reach}+\mathrm{Disc}+\min(20,2s_{\mathrm{rel}})-\mathrm{Crowd}
              \end{aligned}
              `}
            />
          </Card>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card className="space-y-2">
              <h3 className="font-display text-xl text-white">（4）Lesson 质量门</h3>
              <Eq
                tex={String.raw`
                \mathrm{OK}_{\mathrm{lesson}} \iff
                \begin{cases}
                |\mathrm{trigger}|\ge 12 \\
                |\mathrm{rule}|\ge 24 \\
                \mathrm{rule}\ \text{可执行且非套话} \\
                \mathrm{semantic}\Rightarrow \mathrm{evidence}\neq\emptyset
                \end{cases}
                `}
              />
              <p className="text-sm text-ink-400">
                fail-closed：不通过则拒绝入库，防止假学习。
              </p>
            </Card>
            <Card className="space-y-2">
              <h3 className="font-display text-xl text-white">（6）Citation 门禁</h3>
              <Eq
                tex={String.raw`
                \mathrm{CiteOK}=
                \begin{cases}
                \mathrm{true} & \mathcal{A}=\emptyset \\
                \mathrm{true} & |I\cap\mathcal{A}|\ge 1 \\
                \mathrm{false} & \text{otherwise}
                \end{cases}
                `}
              />
              <p className="text-sm text-ink-400">
                展示过的课集合 <Katex tex={String.raw`\mathcal{A}`} />，模型声明的{" "}
                <Katex tex="I" /> 必须命中，否则拒发。
              </p>
            </Card>
          </div>

          <Card className="mt-6 space-y-2">
            <h3 className="font-display text-xl text-white">（5）相关课检索分</h3>
            <Eq
              tex={String.raw`\mathrm{Overlap}(Q,D)=\dfrac{|Q\cap\mathrm{tok}(D)|}{\sqrt{|Q|\,|\mathrm{tok}(D)|}}`}
            />
            <Eq
              tex={String.raw`
              \begin{aligned}
              S(\ell)=&\ \mathrm{Overlap}
              +0.45\cdot\mathbf{1}[\mathrm{class}]
              +0.15\cdot\#\mathrm{tag}
              +0.35\cdot\mathbf{1}[\mathrm{author}] \\
              &+0.50\cdot\mathbf{1}[\mathrm{authorLinked}]
              +0.20\cdot\mathbf{1}[\mathrm{regression}\wedge\mathrm{repair}] \\
              &+\min(0.25,0.25\,\mathrm{conf})
              +\min(0.20,0.03\,\mathrm{reinforce}) \\
              &-\min(0.25,0.05\,\mathrm{regression})
              \quad(S>0)
              \end{aligned}
              `}
              caption="过滤 S>0.05；contextual 槽位约占 ≥60%"
            />
          </Card>

          <Card className="mt-6 space-y-2">
            <h3 className="font-display text-xl text-white">
              （11–12）动作投影与系统身份
            </h3>
            <Eq
              tex={String.raw`a_{\mathrm{exec}}=\Pi_{\mathrm{safe,cite,context,SLA}}(a^{\star})`}
              caption="LLM 提议动作，宿主做安全/引用/上下文/SLA 投影"
            />
            <div className="rounded-2xl border border-white/10 bg-ink-950/60 p-5 font-mono text-sm leading-7 text-neon-lime/90">
              Online constrained growth optimization
              <br />
              = external memory
              <br />
              + stateless LLM policy
              <br />
              + hard safety/citation projection
              <br />
              + outcome → strategy patches
              <br />
              + cost-gated semantic consolidation
            </div>
          </Card>
        </Section>

        {/* Loop */}
        <Section id="loop" eyebrow="04 · System Loop" title="主循环与学习机制">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["1. 门禁", "休息窗 / 用户占用 X / 软错误页 → 跳过或只读"],
              ["2. 观察", "通知、提及、搜索、结果回看、关系、计分板、转化漏斗"],
              ["3. 工作记忆", "相关课检索、未完成义务 SLA、门禁开关打包"],
              ["4. 多层决策", "日策略 → 轮计划 → 分诊 → 起草 → 发布前复核"],
              ["5. 硬门禁", "上下文完整、语言匹配、citation、场地与禁触"],
              ["6. 回执", "成功 / 失败 / 不明确；不明确永不自动重试"],
              ["7. 学习回写", "试验、课、回归检测、策略补丁、条件语义巩固"],
              ["SLA", "纠错/回归 6h，跟进 18h；超时强制优先对话"],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="font-display text-base font-semibold text-white">
                  {t}
                </div>
                <p className="mt-2 text-sm leading-6 text-ink-300">{d}</p>
              </div>
            ))}
          </div>
          <Card className="mt-6">
            <h3 className="mb-3 font-display text-lg text-white">
              负反馈如何改策略
            </h3>
            <ul className="space-y-3">
              <Bullet>
                修复类结果命中成熟课 → 回归计数、开限制、优先修复
              </Bullet>
              <Bullet>
                结果 verdict：kill → Avoid；scale → Prioritize；revise → 混合改写
              </Bullet>
              <Bullet>
                语义巩固仅在高价值信号触发，90 分钟节流，最多 3 个 lesson ops
              </Bullet>
              <Bullet>
                跨轮记忆在外部存储，不在模型 session——可审计、可回放
              </Bullet>
            </ul>
          </Card>
        </Section>

        {/* Results */}
        <Section id="results" eyebrow="05 · Results" title="结果快照（暂停时）">
          <p className="text-ink-300">
            以下为暂停云端调度时的近似读数，供对照，不是最终结论。
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((m) => (
              <Card key={m.label} className="!p-5">
                <div className="text-xs uppercase tracking-wider text-ink-400">
                  {m.label}
                </div>
                <div className="metric-value mt-2">{m.value}</div>
                <div className="mt-1 text-sm text-ink-400">{m.hint}</div>
              </Card>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card>
              <h3 className="mb-3 text-lg font-semibold text-neon-lime">
                初步有效
              </h3>
              <ul className="space-y-3">
                <Bullet>高触达场地下的「先站队再提问」</Bullet>
                <Bullet>同一对话多轮跟进与关系修复</Bullet>
              </ul>
            </Card>
            <Card>
              <h3 className="mb-3 text-lg font-semibold text-neon-pink">
                应减少或停止
              </h3>
              <ul className="space-y-3">
                <Bullet>冷启动原创长帖（转化弱）</Bullet>
                <Bullet>不稳的关注写路径</Bullet>
                <Bullet>低浏览场地硬评论</Bullet>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Cost */}
        <Section id="cost" eyebrow="06 · Cost" title="成本与单位获粉">
          <p>
            成本必须以账单为准；本地只能近似。相对净增约 6
            粉，云端高频思考的单位获粉成本偏高，不适合继续烧。
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["乐观", "$2–5", "高缓存、输出短"],
              ["中位", "$5–12", "常见运行形态"],
              ["悲观", "$15–30+", "长思考推高输出"],
            ].map(([k, v, d]) => (
              <Card key={k} className="text-center !p-6">
                <div className="text-xs uppercase tracking-wider text-ink-400">
                  {k}
                </div>
                <div className="metric-value mt-2 bg-gradient-to-r from-neon-amber to-neon-pink bg-clip-text text-transparent">
                  {v}
                </div>
                <div className="mt-2 text-sm text-ink-400">{d}</div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Pause */}
        <Section id="pause" eyebrow="07 · Pause & Next" title="为什么暂停，下一步是什么">
          <Card className="border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-transparent">
            <div className="mb-3 inline-flex rounded-full border border-amber-300/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-100">
              当前状态：云端自动运营已停止
            </div>
            <p className="text-lg leading-8 text-ink-100">
              第一阶段结束。不是实验失败叙事，而是
              <strong className="text-white">
                {" "}
                成本—增长曲线不再支持继续烧云端 token
              </strong>
              。自动调度已关闭，实验状态保留，等待本地算力后续跑对照。
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-semibold text-white">停止原因</h3>
                <ul className="space-y-3">
                  <Bullet>云端费用与当前涨粉速度不匹配</Bullet>
                  <Bullet>需要对照：同一闭环换本地模型</Bullet>
                  <Bullet>保留状态，避免空转消耗</Bullet>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-semibold text-white">下一阶段假设</h3>
                <p className="text-sm leading-7 text-ink-300">
                  同一增长闭环与计分板下，本地模型能否在可接受成本内维持决策质量，并继续提高合格净增粉？
                  对照：单位算力净增粉、决策合格率、延迟、稳定性。
                </p>
              </div>
            </div>
          </Card>
        </Section>

        {/* Conclusion */}
        <section className="pb-24 pt-8">
          <Card className="overflow-hidden border-cyan-400/20">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-transparent to-neon-violet/10" />
            <div className="relative">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neon-cyan">
                One-liner
              </div>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                不是自动发帖脚本，而是可审计的在线学习运营系统
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-ink-300">
                外部记忆 + 无状态模型决策 + 硬门禁执行 + 结果回写策略。
                已证明：路径可判别、闭环可运行、弱增长可出现。
                尚未证明：低成本稳定达标涨粉。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://x.com/esan7_m"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-neon-cyan"
                >
                  在 X 上关注实验账号
                </a>
                <a
                  href="https://github.com/am5188/x-learning-on-x"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white transition hover:bg-white/10"
                >
                  GitHub 仓库
                </a>
              </div>
              <p className="mt-6 text-xs text-ink-500">
                本页由实验方整理发布；自动运营当前关闭。页面开源，欢迎复现算法叙述与对照实验设计。
              </p>
            </div>
          </Card>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-ink-500">
        X Learning Lab · @esan7_m · Public continuous-learning experiment
      </footer>
    </div>
  );
}
