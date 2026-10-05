import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: false,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "10046455237",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "好想爱这个世界啊 / この世界を愛したい",
				artist: "鹿乃",
				url: "/assets/music/この世界を愛したい - 鹿乃.mp3",
				cover: "/assets/music/cover/この世界を愛したい - 鹿乃.jpg",
				lrc: "/assets/music/lrc/この世界を愛したい - 鹿乃.lrc",
			},
			{
				name: "彼女は旅に出る",
				artist: "鎖那",
				url: "/assets/music/彼女は旅に出る - 鎖那.mp3",
				cover: "/assets/music/cover/彼女は旅に出る - 鎖那_cover.jpg",
				lrc: "/assets/music/lrc/彼女は旅に出る - 鎖那.lrc",
			},
			{
				name: "好想爱这个世界啊",
				artist: "华晨宇",
				url: "/assets/music/好想爱这个世界啊 - 华晨宇.mp3",
				cover: "/assets/music/cover/好想爱这个世界啊.webp",
				lrc: "/assets/music/lrc/好想爱这个世界啊 - 华晨宇.lrc",
			},
			{
				name: "鸟之诗 / 鳥の詩",
				artist: "Lia",
				url: "/assets/music/鳥の詩 - Lia.mp3",
				cover: "/assets/music/cover/鳥の詩 - Lia_cover.jpg",
				lrc: "/assets/music/lrc/鳥の詩 - Lia.lrc",
			},
			{
				name: "千本樱 / 千本桜",
				artist: "黒うさP、初音ミク",
				url: "/assets/music/千本桜 - 黒うさP、初音ミク.mp3",
				cover: "/assets/music/cover/千本桜 - 黒うさP、初音ミク_cover.jpg",
				lrc: "/assets/music/lrc/千本桜 - 黒うさP、初音ミク.lrc",
			},
			{
				name: "神的随波逐流 / 神のまにまに",
				artist: "初音ミク、鏡音リン、GUMI、れるりり",
				url: "/assets/music/神のまにまに - 初音ミク、鏡音リン、GUMI、れるりり.mp3",
				cover: "/assets/music/cover/神のまにまに - 初音ミク、鏡音リン、GUMI、れるりり_cover.jpg",
				lrc: "/assets/music/lrc/神のまにまに - 初音ミク、鏡音リン、GUMI、れるりり.lrc",
			},
		],
	},
};
