import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faMoon } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/animations/scale.css';
import {
    faCircleQuestion,
    faCircleXmark,
    faEllipsisVertical,
    faLanguage,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
    faSquare,
    faSquareArrowUpRight,
} from '@fortawesome/free-solid-svg-icons';
//
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([1, 2, 3]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                {/*Logo*/}
                <div>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                {/*Search*/}
                <Tippy
                    interactive={true} //giúp tương tác với thanh tìm kiếm
                    visible={searchResults.length > 0} //giá trị tìm kiếm > 0 thì hiện bảng tìm kiếm ở dưới
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <div className={cx('tab-account-search')}>
                                    <h4 className={cx('search-title')}>
                                        Tài khoản
                                    </h4>
                                    <div className={cx('search-account')}>
                                        <AccountItem />
                                    </div>
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Tìm kiếm tài khoản và video"
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    {/* Btn-upload */}
                    <div className={cx('upload-btn')}>
                        <FontAwesomeIcon
                            className={cx('upload-plus')}
                            icon={faPlus}
                        />
                        <h4 className={cx('upload-title')}>Tải lên</h4>
                    </div>
                    {/* Btn-login */}
                    <button className={cx('login-btn')}>Đăng nhập</button>
                    {/* More Dot */}
                    <Tippy
                        arrow={true}
                        delay={[0, 1000]}
                        interactive={true} //giúp tương tác với nút thêm
                        render={(attrs) => (
                            <div
                                className={cx('tab-more')}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <PopperWrapper>
                                    <ul className={cx('tab-items')}>
                                        <li className={cx('tab-item')}>
                                            <a>
                                                <FontAwesomeIcon
                                                    className={cx(
                                                        'tab-item-icon',
                                                    )}
                                                    icon={faLanguage}
                                                />
                                                <span
                                                    className={cx(
                                                        'tab-item-title',
                                                    )}
                                                >
                                                    Tiếng Việt
                                                </span>
                                            </a>
                                        </li>
                                        <li className={cx('tab-item')}>
                                            <a>
                                                <FontAwesomeIcon
                                                    className={cx(
                                                        'tab-item-icon',
                                                    )}
                                                    icon={faCircleQuestion}
                                                />
                                                <span
                                                    className={cx(
                                                        'tab-item-title',
                                                    )}
                                                >
                                                    Phản hồi và trợ giúp
                                                </span>
                                            </a>
                                        </li>
                                        <li className={cx('tab-item')}>
                                            <a>
                                                <FontAwesomeIcon
                                                    className={cx(
                                                        'tab-item-icon',
                                                    )}
                                                    icon={faKeyboard}
                                                />
                                                <span
                                                    className={cx(
                                                        'tab-item-title',
                                                    )}
                                                >
                                                    Phím tắt trên bàn phím
                                                </span>
                                            </a>
                                        </li>
                                        <li className={cx('tab-item')}>
                                            <a>
                                                <FontAwesomeIcon
                                                    className={cx(
                                                        'tab-item-icon',
                                                    )}
                                                    icon={faMoon}
                                                />
                                                <span
                                                    className={cx(
                                                        'tab-item-title',
                                                    )}
                                                >
                                                    Chế độ tối
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
