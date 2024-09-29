import { css } from "hono/css";
import { LinkWithHatenaBookmarkCount } from "../components/LinkWithHatenaBookmarkCount";

export const TopPage = () => {
	return (
		<>
			<header>
				<div>
					<img
						src="static/stefafafan.png"
						alt="stefafafan"
						style={{ height: "3em", verticalAlign: "middle" }}
					/>
					<h1>stefafafan a.k.a. すてにゃん</h1>
				</div>
				<p>A software engineer based in Japan.</p>
			</header>
			<div class="container">
				<section>
					<h2>Work experience</h2>
					<ul>
						<li>
							<p>
								2024 - Software Engineer at{" "}
								<a
									href="https://www.kakehashi.life/"
									target={"_blank"}
									rel="noreferrer"
								>
									KAKEHASHI Inc.
								</a>
							</p>
						</li>
						<li>
							<p>
								2015 - 2024 Software Engineer at{" "}
								<a
									href="https://hatena.co.jp/"
									target={"_blank"}
									rel="noreferrer"
								>
									Hatena Co., Ltd.
								</a>
							</p>
						</li>
					</ul>
				</section>
				<section>
					<h2>Blog posts</h2>
					<p>
						The following are a sample of technical blog posts I've written (in
						Japanese). More posts can be found at{" "}
						<a
							href="https://blog.stenyan.jp/"
							target={"_blank"}
							rel="noreferrer"
						>
							stefafafan の fa は3つです
						</a>
						.
					</p>
					<ul>
						<li>
							KAKEHASHI Tech Blog (Company's tech blog)
							<ul>
								<li>
									2024/09/04:{" "}
									<LinkWithHatenaBookmarkCount
										href="https://kakehashi-dev.hatenablog.com/entry/2024/09/04/110000"
										title="新しいチームでTypeScriptに素早くキャッチアップするためにやったこと"
									/>
								</li>
								<li>
									2024/08/15:{" "}
									<LinkWithHatenaBookmarkCount
										href="https://kakehashi-dev.hatenablog.com/entry/2024/08/15/100000"
										title="情報の見つけやすさを追求する - 社内ドキュメンテーションの階層整理術"
									/>
								</li>
							</ul>
						</li>
						<li>
							Hatena Developer Blog (Company's tech blog)
							<ul>
								<li>
									2022/08/04:{" "}
									<LinkWithHatenaBookmarkCount
										href="https://developer.hatenastaff.com/entry/2022/08/04/deployment-preview"
										title="Cloud RunとIdentity-Aware ProxyとGitHub ActionsでPull RequestごとのDeployment Previewを実現する"
									/>
								</li>
								<li>
									2021/11/24:{" "}
									<LinkWithHatenaBookmarkCount
										href="https://developer.hatenastaff.com/entry/2021/11/24/093000"
										title="認定スクラムマスター研修で獲得した知識をチームに還元できている話"
									/>
								</li>
								<li>
									2018/06/20:{" "}
									<LinkWithHatenaBookmarkCount
										href="https://developer.hatenastaff.com/entry/2018/06/20/113142"
										title="はてなのマンガチームに異動して半年で手がけた仕事"
									/>
								</li>
								<li>
									2017/08/08:{" "}
									<LinkWithHatenaBookmarkCount
										href="https://developer.hatenastaff.com/entry/2017/08/08/120000"
										title="Mackerelチームの若手エンジニアが初めて大物タスク「Azureインテグレーション」を手がけた話"
									/>
								</li>
							</ul>
						</li>
						<li>
							stefafafan の fa は3つです (Personal blog)
							<ul>
								<li>
									2023/12/29:{" "}
									<LinkWithHatenaBookmarkCount
										href="https://blog.stenyan.jp/entry/2023/12/29/115336"
										title="エンジニアリングマネージャーの4領域はEM以外のメンバーでも濃淡はあれど意識する必要がある"
									/>
								</li>
								<li>
									2023/11/23:{" "}
									<LinkWithHatenaBookmarkCount
										href="https://blog.stenyan.jp/entry/2023/11/23/164645"
										title="テックリードとして技術的施策をチームに提案する際に意識すべきポイント"
									/>
								</li>
								<li>
									2023/11/23:{" "}
									<LinkWithHatenaBookmarkCount
										href="https://blog.stenyan.jp/entry/2023/11/23/133635"
										title="Webアプリケーションエンジニアとして1on1してもらう際に考えていること"
									/>
								</li>
								<li>
									2023/11/04:{" "}
									<LinkWithHatenaBookmarkCount
										href="https://blog.stenyan.jp/entry/2023/11/04/194730"
										title="OSSコントリビューションへの一歩に悩んでいる方向けにちょっとした事例を紹介"
									/>
								</li>
								<li>
									2022/11/20:{" "}
									<LinkWithHatenaBookmarkCount
										href="https://blog.stenyan.jp/entry/2022/11/20/190000"
										title="ソフトウェア開発サイクルの改善を行う際に認識すべきボトルネックの種類"
									/>
								</li>
								<li>
									2022/06/04:{" "}
									<LinkWithHatenaBookmarkCount
										href="https://blog.stenyan.jp/entry/2022/06/04/185220"
										title="どういう時に「スクラム」フレームワークを使いたいのか"
									/>
								</li>
							</ul>
						</li>
					</ul>
				</section>
				<section>
					<h2>Socials</h2>
					<ul>
						<li>
							<a
								href="https://x.com/stefafafan"
								target="_blank"
								rel="noreferrer"
							>
								𝕏 (Formerly Twitter)
							</a>
						</li>
						<li>
							<a
								href="https://github.com/stefafafan"
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
						</li>
						<li>
							<a
								href="https://speakerdeck.com/stefafafan"
								target="_blank"
								rel="noreferrer"
							>
								Speaker Deck
							</a>
						</li>
						<li>
							<a
								href="https://blog.stenyan.jp/"
								target="_blank"
								rel="noreferrer"
							>
								Hatena Blog
							</a>
						</li>
						<li>
							<a
								href="https://b.hatena.ne.jp/stefafafan/"
								target="_blank"
								rel="noreferrer"
							>
								Hatena Bookmark
							</a>
						</li>
					</ul>
				</section>
			</div>
			<footer>&copy; 2024 stefafafan</footer>
		</>
	);
};
