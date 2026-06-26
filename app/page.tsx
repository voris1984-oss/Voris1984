const projects = [
  {
    title: " 올 브랜드 리뉴얼 시스템",
    type: "Identity / Web",
    year: "2026",
    summary:
      "분산되어 있던 시각 언어를 정리하고, 웹과 인쇄물에 함께 적용할 수 있는 차분한 브랜드 시스템을 설계했습니다.",
  },
  {
    title: "예약 경험 개선",
    type: "Product Design",
    year: "2025",
    summary:
      "사용자가 고민하는 순간을 줄이기 위해 예약 흐름을 재구성하고, 모바일 중심의 정보 위계를 다시 잡았습니다.",
  },
  {
    title: "콘텐츠 아카이브",
    type: "Editorial / CMS",
    year: "2025",
    summary:
      "긴 글과 이미지가 조용히 쌓이는 구조를 만들고, 운영자가 쉽게 분류하고 발행할 수 있는 관리 흐름을 제안했습니다.",
  },
  {
    title: "데이터 리포트 뷰어",
    type: "Dashboard",
    year: "2024",
    summary:
      "복잡한 지표를 빠르게 읽을 수 있도록 밀도와 여백의 균형을 맞춘 내부용 리포트 화면을 제작했습니다.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f1] text-[#171513]">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-[#171513]/10 py-4 text-[11px] uppercase tracking-[0.22em] text-[#171513]/60">
          <a href="#top" className="font-medium text-[#171513]">
            Portfolio
          </a>
          <nav className="hidden gap-8 sm:flex">
            <a href="#about" className="transition hover:text-[#d8722b]">
              About
            </a>
            <a href="#projects" className="transition hover:text-[#d8722b]">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-[#d8722b]">
              Contact
            </a>
          </nav>
        </header>

        <section
          id="top"
          className="grid min-h-[calc(100svh-88px)] grid-cols-1 content-between gap-16 py-14 sm:py-20 lg:grid-cols-[1fr_280px]"
        >
          <div className="flex max-w-4xl flex-col justify-end gap-12">
            <p className="max-w-sm text-sm leading-7 text-[#171513]/62">
              한국어를 우선으로 생각하고, 조용하지만 오래 남는 디지털 경험을 만듭니다.
            </p>
            <div>
              <p className="mb-5 text-[12px] uppercase tracking-[0.24em] text-[#d8722b]">
                Selected Works
              </p>
              <h1 className="max-w-4xl text-[clamp(3.2rem,10vw,9rem)] font-normal leading-[0.95] tracking-normal">
                이름을
                <br />
                넣어주세요
              </h1>
            </div>
          </div>

          <aside className="flex items-end lg:justify-end">
            <div className="profile-placeholder h-48 w-36 shrink-0 border border-[#171513]/15 bg-[#eee8dc] sm:h-60 sm:w-44" />
          </aside>

          <div className="col-span-full grid gap-6 border-t border-[#171513]/10 pt-6 text-[12px] uppercase tracking-[0.2em] text-[#171513]/58 sm:grid-cols-3">
            <p>Designer / Builder</p>
            <p>Seoul, Korea</p>
            <p className="sm:text-right">Available for thoughtful projects</p>
          </div>
        </section>

        <section id="about" className="section-grid border-t border-[#171513]/10 py-20 sm:py-28">
          <p className="section-label">About</p>
          <div className="max-w-3xl space-y-8">
            <p className="text-2xl leading-[1.55] sm:text-4xl sm:leading-[1.35]">
              저는 복잡한 생각을 단정한 화면으로 정리하는 일을 좋아합니다.
              빠르게 시선을 끄는 것보다, 사용자가 오래 머물 수 있는 균형과
              문장을 중요하게 봅니다.
            </p>
            <div className="grid gap-6 text-base leading-8 text-[#171513]/66 sm:grid-cols-2">
              <p>
                전략, 글, 인터페이스가 따로 움직이지 않도록 초기 구조부터
                끝단의 세부 표현까지 함께 다룹니다.
              </p>
              <p>
                이 영역은 예시 문구입니다. 나중에 경력, 강점, 관심 분야,
                협업 방식에 맞춰 자연스럽게 바꿀 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-[#171513]/10 py-20 sm:py-28">
          <div className="section-grid mb-12">
            <p className="section-label">Projects</p>
            <h2 className="max-w-2xl text-3xl font-normal leading-tight sm:text-5xl">
              조용한 구조 안에서 각 작업의 맥락이 먼저 읽히도록 정리했습니다.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border-y border-[#171513]/10 bg-[#171513]/10 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="min-h-72 bg-[#faf7f1] p-6 sm:p-8"
              >
                <div className="flex h-full flex-col justify-between gap-14">
                  <div className="flex items-start justify-between gap-6 text-[11px] uppercase tracking-[0.2em] text-[#171513]/50">
                    <p>{project.type}</p>
                    <p>{project.year}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-normal sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-5 max-w-md text-[15px] leading-7 text-[#171513]/64">
                      {project.summary}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="section-grid border-t border-[#171513]/10 py-20 sm:py-28"
        >
          <p className="section-label">Contact</p>
          <div className="max-w-3xl">
            <h2 className="text-4xl font-normal leading-tight sm:text-7xl">
              천천히, 하지만 분명하게 이야기해요.
            </h2>
            <div className="mt-12 grid gap-6 text-base leading-8 text-[#171513]/66 sm:grid-cols-2">
              <p>
                새로운 프로젝트, 협업 제안, 포트폴리오 피드백 모두 환영합니다.
                아래 연락처는 예시입니다.
              </p>
              <div className="space-y-3">
                <a
                  className="contact-link"
                  href="mailto:hello@example.com"
                >
                  hello@example.com
                </a>
                <a className="contact-link" href="https://www.linkedin.com">
                  LinkedIn
                </a>
                <a className="contact-link" href="https://github.com">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-[#171513]/10 py-6 text-[11px] uppercase tracking-[0.2em] text-[#171513]/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Portfolio Landing Page</p>
          <p>Warm monochrome / Orange accent</p>
        </footer>
      </div>
    </main>
  );
}
