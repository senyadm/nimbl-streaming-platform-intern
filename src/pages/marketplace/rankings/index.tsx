import React, { useState } from 'react'
import categorySvg from '../../../assets/icons/top-creator-icon.svg'
import arrowDownSvg from '../../../assets/icons/arrow_down.svg'
import Image from 'next/image'
import trendingImg from '../../../assets/icons/trending.svg'
import plus from '../../../assets/icons/plus.svg'
import styles from '../rankings/Rankings.module.scss'
import cryptonewsImg from '../../../assets/icons/cryptonews.svg'
import ethnftImg from '../../../assets/icons/ethnfts.svg'
import play2earn from '../../../assets/icons/play2earn.svg'
import channelImg from '../../../assets/icons/channel.svg'
import pauseImg from '../../../assets/icons/pause_2.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { setActive } from '@/store/features/rankings-filter/filter'
import Layout from '@/components/Layout'

const RankingsPage = () => {
    const [isGrid, setIsGrid] = useState(true)
    // const [activeGrid, setActiveGrid] = useState(0)
    const dispatch = useDispatch()
    const { time } = useSelector((store: RootState) => store.filter)

    return (
        <Layout>
            <div className={styles.table_content}>
                <div className={styles.mainContainer}>
                    <div className={styles.main}>
                        <Image src={trendingImg} alt="trending" />
                        <div>
                            <h3>Trending Videos</h3>
                        </div>

                        <Image className={styles.plus} src={plus} alt="plus" />
                    </div>
                    <div className={styles.main}>
                        <Image src={cryptonewsImg} alt="cryptonews" />
                        <div>
                            <h3
                                style={{
                                    marginLeft: '10px',
                                }}
                            >
                                Crypto News
                            </h3>
                        </div>

                        <Image className={styles.plus} src={plus} alt="plus" />
                    </div>
                    <div className={styles.main}>
                        <Image src={ethnftImg} alt="ethnft" />
                        <div>
                            <h3
                                style={{
                                    marginLeft: '30px',
                                }}
                            >
                                ETH NFTs
                            </h3>
                        </div>

                        <Image className={styles.plus} src={plus} alt="plus" />
                    </div>
                    <div className={styles.main}>
                        <Image src={play2earn} alt="play2earn" />
                        <div>
                            <h3
                                style={{
                                    marginLeft: '30px',
                                }}
                            >
                                Play2Earn
                            </h3>
                        </div>

                        <Image className={styles.plus} src={plus} alt="plus" />
                    </div>
                    <div className={styles.main}>
                        <Image src={play2earn} alt="play2earn" />
                        <div>
                            <h3
                                style={{
                                    marginLeft: '30px',
                                }}
                            >
                                Play2Earn
                            </h3>
                        </div>
                        <Image className={styles.plus} src={plus} alt="plus" />
                    </div>
                </div>
                <div className={styles.table_inner}>
                    <div className={styles.table_content_inner}>
                        <div className={styles.sidebar_sort}>
                            <div className={styles.sort_byCategory}>
                                <Image
                                    className={styles.byCategory_svg}
                                    src={categorySvg}
                                    alt=""
                                />
                                <div className={styles.byCategory_text}>
                                    Top Creators
                                </div>
                                <Image
                                    className={styles.byCategory_icon}
                                    src={arrowDownSvg}
                                    alt=""
                                    style={{
                                        width: '20px',
                                        height: '15px',
                                    }}
                                />
                            </div>
                            <div className={styles.sortByDate}>
                                {time.map((item) => {
                                    const { id, name, isActive } = item
                                    return (
                                        <div
                                            key={id}
                                            className={
                                                isActive
                                                    ? `${styles.dateItem} ${styles.active}`
                                                    : `${styles.dateItem}`
                                            }
                                            onClick={() => dispatch(setActive(id))}
                                        >
                                            {name}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={styles.sort_byCategory}>
                                <div
                                    className={styles.byCategoty_text}
                                    style={{
                                        maxWidth: '88%',
                                        fontWeight: '400',
                                        fontSize: '16px',
                                        textAlign: 'center',
                                        marginRight: '20px',
                                        color: '#fff',
                                        paddingLeft: '17px',
                                    }}
                                >
                                    All Categories
                                </div>
                                <Image
                                    className={styles.byCategory_icon}
                                    src={arrowDownSvg}
                                    alt=""
                                    style={{
                                        marginLeft: '3px',
                                        width: '12%',
                                        height: '12%',
                                    }}
                                />
                            </div>
                            <div className={styles.header_tabs}>
                                <div
                                    onClick={() => setIsGrid(true)}
                                    className={`${styles.header_tab} ${
                                        isGrid ? styles.activeGrid : ''
                                    }`}
                                >
                                    View as Grid
                                </div>
                                <div
                                    onClick={() => setIsGrid(false)}
                                    className={`${styles.header_tab} ${
                                        !isGrid ? styles.activeGrid : ''
                                    }`}
                                >
                                    View as List
                                </div>
                            </div>
                        </div>
                    </div>
                    {isGrid ? (
                        <>
                            <div className={styles.card_grid}>
                                <div className={styles.ranking_boxs}>
                                    <div className={styles.card_loop}>
                                        <div className={styles.card_box}>
                                            <div className={styles.video_header}>
                                                <Image
                                                    className={
                                                        styles.video_header_logo
                                                    }
                                                    src={channelImg}
                                                    alt=""
                                                />
                                                <div className={styles.video_pause}>
                                                    <Image
                                                        className={
                                                            styles.video_box_pause
                                                        }
                                                        src={pauseImg}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className={styles.video_body}>
                                                <div
                                                    className={styles.box_title}
                                                    style={{ color: '#fff' }}
                                                >
                                                    @Yellow Stone
                                                </div>
                                                <div className={styles.box_buttons}>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                        style={{
                                                            color: '#fff',
                                                            width: '40%',
                                                            marginLeft: '-10px',
                                                        }}
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_header
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                            }}
                                                        >
                                                            <div
                                                                className={
                                                                    styles.count
                                                                }
                                                            >
                                                                500K
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                        >
                                                            members
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_title
                                                            }
                                                            style={{
                                                                marginRight: '10px',
                                                            }}
                                                        >
                                                            134 NMBL
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                                marginRight: '12px',
                                                            }}
                                                        >
                                                            floor price
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.box_footer}>
                                                    <div
                                                        className={
                                                            styles.tag_content
                                                        }
                                                        style={{
                                                            gap: '25px',
                                                        }}
                                                    >
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                padding: '3px 7px',
                                                                fontWeight: '400',
                                                                fontSize: '16px',
                                                            }}
                                                        >
                                                            #ETH-NFTs
                                                        </div>
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                marginBottom: '5px',
                                                                marginRight:
                                                                    '-12px',
                                                            }}
                                                        >
                                                            #NFT-Trading
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.ranking_boxs}>
                                    <div className={styles.card_loop}>
                                        <div className={styles.card_box}>
                                            <div className={styles.video_header}>
                                                <Image
                                                    className={
                                                        styles.video_header_logo
                                                    }
                                                    src={channelImg}
                                                    alt=""
                                                />
                                                <div className={styles.video_pause}>
                                                    <Image
                                                        className={
                                                            styles.video_box_pause
                                                        }
                                                        src={pauseImg}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className={styles.video_body}>
                                                <div
                                                    className={styles.box_title}
                                                    style={{ color: '#fff' }}
                                                >
                                                    @Yellow Stone
                                                </div>
                                                <div className={styles.box_buttons}>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                        style={{
                                                            color: '#fff',
                                                            width: '40%',
                                                            marginLeft: '-10px',
                                                        }}
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_header
                                                            }
                                                        >
                                                            <div
                                                                className={
                                                                    styles.count
                                                                }
                                                            >
                                                                500K
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                        >
                                                            members
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_title
                                                            }
                                                            style={{
                                                                marginRight: '10px',
                                                            }}
                                                        >
                                                            134 NMBL
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                                marginRight: '12px',
                                                            }}
                                                        >
                                                            floor price
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.box_footer}>
                                                    <div
                                                        className={
                                                            styles.tag_content
                                                        }
                                                        style={{
                                                            gap: '25px',
                                                        }}
                                                    >
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                padding: '3px 7px',
                                                                fontWeight: '400',
                                                                fontSize: '16px',
                                                            }}
                                                        >
                                                            #ETH-NFTs
                                                        </div>
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                marginBottom: '5px',
                                                                marginRight:
                                                                    '-12px',
                                                            }}
                                                        >
                                                            #NFT-Trading
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.ranking_boxs}>
                                    <div className={styles.card_loop}>
                                        <div className={styles.card_box}>
                                            <div className={styles.video_header}>
                                                <Image
                                                    className={
                                                        styles.video_header_logo
                                                    }
                                                    src={channelImg}
                                                    alt=""
                                                />
                                                <div className={styles.video_pause}>
                                                    <Image
                                                        className={
                                                            styles.video_box_pause
                                                        }
                                                        src={pauseImg}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className={styles.video_body}>
                                                <div
                                                    className={styles.box_title}
                                                    style={{ color: '#fff' }}
                                                >
                                                    @Yellow Stone
                                                </div>
                                                <div className={styles.box_buttons}>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                        style={{
                                                            color: '#fff',
                                                            width: '40%',
                                                            marginLeft: '-10px',
                                                        }}
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_header
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                            }}
                                                        >
                                                            <div
                                                                className={
                                                                    styles.count
                                                                }
                                                            >
                                                                500K
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                        >
                                                            members
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_title
                                                            }
                                                            style={{
                                                                marginRight: '10px',
                                                            }}
                                                        >
                                                            134 NMBL
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                                marginRight: '12px',
                                                            }}
                                                        >
                                                            floor price
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.box_footer}>
                                                    <div
                                                        className={
                                                            styles.tag_content
                                                        }
                                                        style={{
                                                            gap: '25px',
                                                        }}
                                                    >
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                padding: '3px 7px',
                                                                fontWeight: '400',
                                                                fontSize: '16px',
                                                            }}
                                                        >
                                                            #ETH-NFTs
                                                        </div>
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                marginBottom: '5px',
                                                                marginRight:
                                                                    '-12px',
                                                            }}
                                                        >
                                                            #NFT-Trading
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.ranking_boxs}>
                                    <div className={styles.card_loop}>
                                        <div className={styles.card_box}>
                                            <div className={styles.video_header}>
                                                <Image
                                                    className={
                                                        styles.video_header_logo
                                                    }
                                                    src={channelImg}
                                                    alt=""
                                                />
                                                <div className={styles.video_pause}>
                                                    <Image
                                                        className={
                                                            styles.video_box_pause
                                                        }
                                                        src={pauseImg}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className={styles.video_body}>
                                                <div
                                                    className={styles.box_title}
                                                    style={{ color: '#fff' }}
                                                >
                                                    @Yellow Stone
                                                </div>
                                                <div className={styles.box_buttons}>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                        style={{
                                                            color: '#fff',
                                                            width: '40%',
                                                            marginLeft: '-10px',
                                                        }}
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_header
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                            }}
                                                        >
                                                            <div
                                                                className={
                                                                    styles.count
                                                                }
                                                            >
                                                                500K
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                        >
                                                            members
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_title
                                                            }
                                                            style={{
                                                                marginRight: '10px',
                                                            }}
                                                        >
                                                            134 NMBL
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                                marginRight: '12px',
                                                            }}
                                                        >
                                                            floor price
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.box_footer}>
                                                    <div
                                                        className={
                                                            styles.tag_content
                                                        }
                                                        style={{
                                                            gap: '25px',
                                                        }}
                                                    >
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                padding: '3px 7px',
                                                                fontWeight: '400',
                                                                fontSize: '16px',
                                                            }}
                                                        >
                                                            #ETH-NFTs
                                                        </div>
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                marginBottom: '5px',
                                                                marginRight:
                                                                    '-12px',
                                                            }}
                                                        >
                                                            #NFT-Trading
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.ranking_boxs}>
                                    <div className={styles.card_loop}>
                                        <div className={styles.card_box}>
                                            <div className={styles.video_header}>
                                                <Image
                                                    className={
                                                        styles.video_header_logo
                                                    }
                                                    src={channelImg}
                                                    alt=""
                                                />
                                                <div className={styles.video_pause}>
                                                    <Image
                                                        className={
                                                            styles.video_box_pause
                                                        }
                                                        src={pauseImg}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className={styles.video_body}>
                                                <div
                                                    className={styles.box_title}
                                                    style={{ color: '#fff' }}
                                                >
                                                    @Yellow Stone
                                                </div>
                                                <div className={styles.box_buttons}>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                        style={{
                                                            color: '#fff',
                                                            width: '40%',
                                                            marginLeft: '-10px',
                                                        }}
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_header
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                            }}
                                                        >
                                                            <div
                                                                className={
                                                                    styles.count
                                                                }
                                                            >
                                                                500K
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                        >
                                                            members
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_title
                                                            }
                                                            style={{
                                                                marginRight: '10px',
                                                            }}
                                                        >
                                                            134 NMBL
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                                marginRight: '12px',
                                                            }}
                                                        >
                                                            floor price
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.box_footer}>
                                                    <div
                                                        className={
                                                            styles.tag_content
                                                        }
                                                        style={{
                                                            gap: '25px',
                                                        }}
                                                    >
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                padding: '3px 7px',
                                                                fontWeight: '400',
                                                                fontSize: '16px',
                                                            }}
                                                        >
                                                            #ETH-NFTs
                                                        </div>
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                marginBottom: '5px',
                                                                marginRight:
                                                                    '-12px',
                                                            }}
                                                        >
                                                            #NFT-Trading
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={styles.card_grid}
                                style={{
                                    marginTop: '-10px',
                                }}
                            >
                                <div className={styles.ranking_boxs}>
                                    <div className={styles.card_loop}>
                                        <div className={styles.card_box}>
                                            <div className={styles.video_header}>
                                                <Image
                                                    className={
                                                        styles.video_header_logo
                                                    }
                                                    src={channelImg}
                                                    alt=""
                                                />
                                                <div className={styles.video_pause}>
                                                    <Image
                                                        className={
                                                            styles.video_box_pause
                                                        }
                                                        src={pauseImg}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className={styles.video_body}>
                                                <div
                                                    className={styles.box_title}
                                                    style={{ color: '#fff' }}
                                                >
                                                    @Yellow Stone
                                                </div>
                                                <div className={styles.box_buttons}>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                        style={{
                                                            color: '#fff',
                                                            width: '40%',
                                                            marginLeft: '-10px',
                                                        }}
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_header
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                            }}
                                                        >
                                                            <div
                                                                className={
                                                                    styles.count
                                                                }
                                                            >
                                                                500K
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                        >
                                                            members
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_title
                                                            }
                                                            style={{
                                                                marginRight: '10px',
                                                            }}
                                                        >
                                                            134 NMBL
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                                marginRight: '12px',
                                                            }}
                                                        >
                                                            floor price
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.box_footer}>
                                                    <div
                                                        className={
                                                            styles.tag_content
                                                        }
                                                        style={{
                                                            gap: '25px',
                                                        }}
                                                    >
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                padding: '3px 7px',
                                                                fontWeight: '400',
                                                                fontSize: '16px',
                                                            }}
                                                        >
                                                            #ETH-NFTs
                                                        </div>
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                marginBottom: '5px',
                                                                marginRight:
                                                                    '-12px',
                                                            }}
                                                        >
                                                            #NFT-Trading
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.ranking_boxs}>
                                    <div className={styles.card_loop}>
                                        <div className={styles.card_box}>
                                            <div className={styles.video_header}>
                                                <Image
                                                    className={
                                                        styles.video_header_logo
                                                    }
                                                    src={channelImg}
                                                    alt=""
                                                />
                                                <div className={styles.video_pause}>
                                                    <Image
                                                        className={
                                                            styles.video_box_pause
                                                        }
                                                        src={pauseImg}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className={styles.video_body}>
                                                <div
                                                    className={styles.box_title}
                                                    style={{ color: '#fff' }}
                                                >
                                                    @Yellow Stone
                                                </div>
                                                <div className={styles.box_buttons}>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                        style={{
                                                            color: '#fff',
                                                            width: '40%',
                                                            marginLeft: '-10px',
                                                        }}
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_header
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                            }}
                                                        >
                                                            <div
                                                                className={
                                                                    styles.count
                                                                }
                                                            >
                                                                500K
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                        >
                                                            members
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_title
                                                            }
                                                            style={{
                                                                marginRight: '10px',
                                                            }}
                                                        >
                                                            134 NMBL
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                                marginRight: '12px',
                                                            }}
                                                        >
                                                            floor price
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.box_footer}>
                                                    <div
                                                        className={
                                                            styles.tag_content
                                                        }
                                                        style={{
                                                            gap: '25px',
                                                        }}
                                                    >
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                padding: '3px 7px',
                                                                fontWeight: '400',
                                                                fontSize: '16px',
                                                            }}
                                                        >
                                                            #ETH-NFTs
                                                        </div>
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                marginBottom: '5px',
                                                                marginRight:
                                                                    '-12px',
                                                            }}
                                                        >
                                                            #NFT-Trading
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.ranking_boxs}>
                                    <div className={styles.card_loop}>
                                        <div className={styles.card_box}>
                                            <div className={styles.video_header}>
                                                <Image
                                                    className={
                                                        styles.video_header_logo
                                                    }
                                                    src={channelImg}
                                                    alt=""
                                                />
                                                <div className={styles.video_pause}>
                                                    <Image
                                                        className={
                                                            styles.video_box_pause
                                                        }
                                                        src={pauseImg}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className={styles.video_body}>
                                                <div
                                                    className={styles.box_title}
                                                    style={{ color: '#fff' }}
                                                >
                                                    @Yellow Stone
                                                </div>
                                                <div className={styles.box_buttons}>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                        style={{
                                                            color: '#fff',
                                                            width: '40%',
                                                            marginLeft: '-10px',
                                                        }}
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_header
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                            }}
                                                        >
                                                            <div
                                                                className={
                                                                    styles.count
                                                                }
                                                            >
                                                                500K
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                        >
                                                            members
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_title
                                                            }
                                                            style={{
                                                                marginRight: '10px',
                                                            }}
                                                        >
                                                            134 NMBL
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                                marginRight: '12px',
                                                            }}
                                                        >
                                                            floor price
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.box_footer}>
                                                    <div
                                                        className={
                                                            styles.tag_content
                                                        }
                                                        style={{
                                                            gap: '25px',
                                                        }}
                                                    >
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                padding: '3px 7px',
                                                                fontWeight: '400',
                                                                fontSize: '16px',
                                                            }}
                                                        >
                                                            #ETH-NFTs
                                                        </div>
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                marginBottom: '5px',
                                                                marginRight:
                                                                    '-12px',
                                                            }}
                                                        >
                                                            #NFT-Trading
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.ranking_boxs}>
                                    <div className={styles.card_loop}>
                                        <div className={styles.card_box}>
                                            <div className={styles.video_header}>
                                                <Image
                                                    className={
                                                        styles.video_header_logo
                                                    }
                                                    src={channelImg}
                                                    alt=""
                                                />
                                                <div className={styles.video_pause}>
                                                    <Image
                                                        className={
                                                            styles.video_box_pause
                                                        }
                                                        src={pauseImg}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className={styles.video_body}>
                                                <div
                                                    className={styles.box_title}
                                                    style={{ color: '#fff' }}
                                                >
                                                    @Yellow Stone
                                                </div>
                                                <div className={styles.box_buttons}>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                        style={{
                                                            color: '#fff',
                                                            width: '40%',
                                                            marginLeft: '-10px',
                                                        }}
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_header
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                            }}
                                                        >
                                                            <div
                                                                className={
                                                                    styles.count
                                                                }
                                                            >
                                                                500K
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                        >
                                                            members
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_title
                                                            }
                                                            style={{
                                                                marginRight: '10px',
                                                            }}
                                                        >
                                                            134 NMBL
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                                marginRight: '12px',
                                                            }}
                                                        >
                                                            floor price
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.box_footer}>
                                                    <div
                                                        className={
                                                            styles.tag_content
                                                        }
                                                        style={{
                                                            gap: '25px',
                                                        }}
                                                    >
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                padding: '3px 7px',
                                                                fontWeight: '400',
                                                                fontSize: '16px',
                                                            }}
                                                        >
                                                            #ETH-NFTs
                                                        </div>
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                marginBottom: '5px',
                                                                marginRight:
                                                                    '-12px',
                                                            }}
                                                        >
                                                            #NFT-Trading
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.ranking_boxs}>
                                    <div className={styles.card_loop}>
                                        <div className={styles.card_box}>
                                            <div className={styles.video_header}>
                                                <Image
                                                    className={
                                                        styles.video_header_logo
                                                    }
                                                    src={channelImg}
                                                    alt=""
                                                />
                                                <div className={styles.video_pause}>
                                                    <Image
                                                        className={
                                                            styles.video_box_pause
                                                        }
                                                        src={pauseImg}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className={styles.video_body}>
                                                <div
                                                    className={styles.box_title}
                                                    style={{ color: '#fff' }}
                                                >
                                                    @Yellow Stone
                                                </div>
                                                <div className={styles.box_buttons}>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                        style={{
                                                            color: '#fff',
                                                            width: '40%',
                                                            marginLeft: '-13px',
                                                        }}
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_header
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                            }}
                                                        >
                                                            <div
                                                                className={
                                                                    styles.count
                                                                }
                                                            >
                                                                500K
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                        >
                                                            members
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.box_button
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.box_button_title
                                                            }
                                                            style={{
                                                                marginRight: '10px',
                                                            }}
                                                        >
                                                            134 NMBL
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.box_button_footer
                                                            }
                                                            style={{
                                                                color: '#fff',
                                                                marginRight: '12px',
                                                            }}
                                                        >
                                                            floor price
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.box_footer}>
                                                    <div
                                                        className={
                                                            styles.tag_content
                                                        }
                                                        style={{
                                                            gap: '25px',
                                                        }}
                                                    >
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                padding: '3px 7px',
                                                                fontWeight: '400',
                                                                fontSize: '16px',
                                                            }}
                                                        >
                                                            #ETH-NFTs
                                                        </div>
                                                        <div
                                                            className={styles.tag}
                                                            style={{
                                                                marginBottom: '5px',
                                                                marginRight:
                                                                    '-12px',
                                                            }}
                                                        >
                                                            #NFT-Trading
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className={`${styles.tables} ${styles.table_body}`}>
                            <div className={styles.table_header}>
                                <div className={styles.table_img}></div>
                                <div className={styles.title_content}>Ranking</div>
                                <div className={styles.tag_content}>Level</div>
                                <div className={styles.level_content}>
                                    Categories
                                </div>
                                <div className={styles.listing_content}>
                                    The # of Listings
                                </div>
                                <div className={styles.price_content}>
                                    Floor Price:
                                </div>
                                <div className={styles.community_content}>
                                    Community Size
                                </div>
                                <div className={styles.total_content}>
                                    Total Volume
                                </div>
                            </div>
                            <div className={styles.tables_body}>
                                <div className={styles.table_body}>
                                    <Image
                                        className={styles.table_img}
                                        src={channelImg}
                                        alt=""
                                    />
                                    <div className={styles.title_content}>
                                        <div className={styles.rang}>Rank 1</div>
                                        <div className={styles.nike}>
                                            @Tim.Cooks
                                        </div>
                                    </div>
                                    <div className={styles.level_content}>
                                        Level 14 Creator
                                    </div>
                                    <div className={styles.tag_content}>
                                        <div className={styles.tag}>
                                            #ETH-NFT #NFT-Trading #Discord-Tips
                                        </div>
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '-140px',
                                        }}
                                    >
                                        480/4022
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '40px',
                                        }}
                                    >
                                        40 NMBL
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '20px',
                                        }}
                                    >
                                        6700
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '35px',
                                        }}
                                    >
                                        144K NMBL
                                    </div>
                                </div>
                                <div className={styles.table_body}>
                                    <Image
                                        className={styles.table_img}
                                        src={channelImg}
                                        alt=""
                                    />
                                    <div className={styles.title_content}>
                                        <div className={styles.rang}>Rank 1</div>
                                        <div className={styles.nike}>
                                            @Tim.Cooks
                                        </div>
                                    </div>
                                    <div className={styles.level_content}>
                                        Level 14 Creator
                                    </div>
                                    <div className={styles.tag_content}>
                                        <div className={styles.tag}>
                                            #ETH-NFT #NFT-Trading #Discord-Tips
                                        </div>
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '-140px',
                                        }}
                                    >
                                        480/4022
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '40px',
                                        }}
                                    >
                                        40 NMBL
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '20px',
                                        }}
                                    >
                                        6700
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '35px',
                                        }}
                                    >
                                        144K NMBL
                                    </div>
                                </div>
                                <div className={styles.table_body}>
                                    <Image
                                        className={styles.table_img}
                                        src={channelImg}
                                        alt=""
                                    />
                                    <div className={styles.title_content}>
                                        <div className={styles.rang}>Rank 1</div>
                                        <div className={styles.nike}>
                                            @Tim.Cooks
                                        </div>
                                    </div>
                                    <div className={styles.level_content}>
                                        Level 14 Creator
                                    </div>
                                    <div className={styles.tag_content}>
                                        <div className={styles.tag}>
                                            #ETH-NFT #NFT-Trading #Discord-Tips
                                        </div>
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '-140px',
                                        }}
                                    >
                                        480/4022
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '40px',
                                        }}
                                    >
                                        40 NMBL
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '20px',
                                        }}
                                    >
                                        6700
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '35px',
                                        }}
                                    >
                                        144K NMBL
                                    </div>
                                </div>
                                <div className={styles.table_body}>
                                    <Image
                                        className={styles.table_img}
                                        src={channelImg}
                                        alt=""
                                    />
                                    <div className={styles.title_content}>
                                        <div className={styles.rang}>Rank 1</div>
                                        <div className={styles.nike}>
                                            @Tim.Cooks
                                        </div>
                                    </div>
                                    <div className={styles.level_content}>
                                        Level 14 Creator
                                    </div>
                                    <div className={styles.tag_content}>
                                        <div className={styles.tag}>
                                            #ETH-NFT #NFT-Trading #Discord-Tips
                                        </div>
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '-140px',
                                        }}
                                    >
                                        480/4022
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '40px',
                                        }}
                                    >
                                        40 NMBL
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '20px',
                                        }}
                                    >
                                        6700
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '35px',
                                        }}
                                    >
                                        144K NMBL
                                    </div>
                                </div>
                                <div className={styles.table_body}>
                                    <Image
                                        className={styles.table_img}
                                        src={channelImg}
                                        alt=""
                                    />
                                    <div className={styles.title_content}>
                                        <div className={styles.rang}>Rank 1</div>
                                        <div className={styles.nike}>
                                            @Tim.Cooks
                                        </div>
                                    </div>
                                    <div className={styles.level_content}>
                                        Level 14 Creator
                                    </div>
                                    <div className={styles.tag_content}>
                                        <div className={styles.tag}>
                                            #ETH-NFT #NFT-Trading #Discord-Tips
                                        </div>
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '-140px',
                                        }}
                                    >
                                        480/4022
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '40px',
                                        }}
                                    >
                                        40 NMBL
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '20px',
                                        }}
                                    >
                                        6700
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '35px',
                                        }}
                                    >
                                        144K NMBL
                                    </div>
                                </div>
                                <div className={styles.table_body}>
                                    <Image
                                        className={styles.table_img}
                                        src={channelImg}
                                        alt=""
                                    />
                                    <div className={styles.title_content}>
                                        <div className={styles.rang}>Rank 1</div>
                                        <div className={styles.nike}>
                                            @Tim.Cooks
                                        </div>
                                    </div>
                                    <div className={styles.level_content}>
                                        Level 14 Creator
                                    </div>
                                    <div className={styles.tag_content}>
                                        <div className={styles.tag}>
                                            #ETH-NFT #NFT-Trading #Discord-Tips
                                        </div>
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '-140px',
                                        }}
                                    >
                                        480/4022
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '40px',
                                        }}
                                    >
                                        40 NMBL
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '20px',
                                        }}
                                    >
                                        6700
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '35px',
                                        }}
                                    >
                                        144K NMBL
                                    </div>
                                </div>
                                <div className={styles.table_body}>
                                    <Image
                                        className={styles.table_img}
                                        src={channelImg}
                                        alt=""
                                    />
                                    <div className={styles.title_content}>
                                        <div className={styles.rang}>Rank 1</div>
                                        <div className={styles.nike}>
                                            @Tim.Cooks
                                        </div>
                                    </div>
                                    <div className={styles.level_content}>
                                        Level 14 Creator
                                    </div>
                                    <div className={styles.tag_content}>
                                        <div className={styles.tag}>
                                            #ETH-NFT #NFT-Trading #Discord-Tips
                                        </div>
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '-140px',
                                        }}
                                    >
                                        480/4022
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '40px',
                                        }}
                                    >
                                        40 NMBL
                                    </div>
                                    <div
                                        className={styles.listing_content}
                                        style={{
                                            marginLeft: '20px',
                                        }}
                                    >
                                        6700
                                    </div>
                                    <div
                                        className={styles.price_content}
                                        style={{
                                            marginLeft: '35px',
                                        }}
                                    >
                                        144K NMBL
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default RankingsPage