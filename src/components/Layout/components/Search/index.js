import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    const inputElement = useRef();

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);

    const handleSearchClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputElement.current.focus();
    };

    const handleHideResult = () => {
        setShowSearchResult(false);
    };
    return (
        <HeadlessTippy
            interactive={true} //giúp tương tác với thanh tìm kiếm
            visible={showSearchResult && searchResult.length > 0} //giá trị tìm kiếm > 0 thì hiện bảng tìm kiếm ở dưới
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('tab-account-search')}>
                            <h4 className={cx('tab-title')}>Tài khoản</h4>
                            <AccountItem />
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputElement}
                    value={searchValue}
                    placeholder="Tìm kiếm tài khoản và video"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowSearchResult(true)}
                />
                {!!searchValue && (
                    <button className={cx('clear')} onClick={handleSearchClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
