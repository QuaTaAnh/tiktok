import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SidebarFooter.module.scss';
import FooterItem from './FooterItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function SidebarFooter() {
    const renderMore = (props) => {
        return (
            <div tabIndex="-1" {...props} className={cx('render-more')}>
                <PopperWrapper renderMore>
                    <a
                        className={cx('render-title')}
                        target="_blank"
                        href="https://www.tiktok.com/legal/law-enforcement?lang=vi-VN"
                    >
                        NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
                    </a>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer-items')}>
                <FooterItem
                    href="https://www.tiktok.com/about?lang=en"
                    target="_blank"
                    title="Giới thiệu"
                />

                <FooterItem
                    href="https://newsroom.tiktok.com/?lang=en"
                    target="_blank"
                    title="Bảng tin"
                />

                <FooterItem
                    href="https://www.tiktok.com/about/contact?lang=en"
                    target="_blank"
                    title="Liên hệ"
                />

                <FooterItem
                    href="https://careers.tiktok.com?lang=en"
                    target="_blank"
                    title="Sự nghiệp"
                />
                <FooterItem
                    href="https://www.bytedance.com/?lang=en"
                    target="_blank"
                    title="ByteDance"
                />
            </div>
            <div className={cx('footer-items')}>
                <FooterItem
                    href="https://www.tiktok.com/forgood?lang=en"
                    target="_blank"
                    title="TikTok for Good"
                />
                <FooterItem
                    href="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&lang=en&refer=tiktok_web"
                    target="_blank"
                    title="Quảng cáo"
                />
                <FooterItem
                    href="https://developers.tiktok.com/?lang=en&refer=tiktok_web"
                    target="_blank"
                    title="Developers"
                />
                <FooterItem
                    href="https://www.tiktok.com/transparency?lang=en"
                    target="_blank"
                    title="Transparency"
                />
                <br></br>
                <FooterItem
                    href="https://www.tiktok.com/tiktok-rewards/en?lang=en"
                    target="_blank"
                    title="TikTok Rewards"
                />
                <FooterItem
                    href="https://www.tiktok.com/browse?lang=en"
                    target="_blank"
                    title="TikTok Browse"
                />
                <FooterItem
                    href="https://www.tiktok.com/embed?lang=en"
                    target="_blank"
                    title="TikTok Embeds"
                />
            </div>

            <div className={cx('footer-items')}>
                <FooterItem
                    href="https://support.tiktok.com/en?lang=en"
                    target="_blank"
                    title="Trợ giúp"
                />
                <FooterItem
                    href="https://www.tiktok.com/safety?lang=en"
                    target="_blank"
                    title="An toàn"
                />
                <FooterItem
                    href="https://www.tiktok.com/legal/terms-of-service?lang=en"
                    target="_blank"
                    title="Điều khoản"
                />
                <FooterItem
                    href="https://www.tiktok.com/legal/privacy-policy-row?lang=en"
                    target="_blank"
                    title="Quyền riêng tư"
                />
                <br></br>
                <FooterItem
                    href="https://www.tiktok.com/creators/creator-portal/en-us/?lang=en"
                    target="_blank"
                    title="Creator Portal"
                />
                <FooterItem
                    href="https://www.tiktok.com/community-guidelines?lang=en"
                    target="_blank"
                    title="Hướng dẫn Cộng đồng"
                />
            </div>

            <Tippy
                interactive
                placement="top"
                offset={[70, 10]}
                render={renderMore}
            >
                <div className={cx('footer-items')}>
                    <FooterItem more title="Thêm" />
                </div>
            </Tippy>
            <div className={cx('copyright')}>
                <FontAwesomeIcon
                    className={cx('copy-icon')}
                    icon={faCopyright}
                />
                <a className={cx('copy-title')}>2022 Tiktok</a>
            </div>
        </div>
    );
}

export default SidebarFooter;
