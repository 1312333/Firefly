import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题，留空则走i18n默认标题
	title: "",

	// 公告内容
	content: "一名东莞某中学初三生。随着学业日益紧张繁忙，博客更新将放缓，甚至可能暂时停更，但这绝不会是终点。\n\n国庆假期，祖国迎来77岁生日。祝祖国山河壮丽、大地丰饶，神州沐朝晖！祝大家心有所悦、业有所成，万事皆可期！",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "了解我",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
