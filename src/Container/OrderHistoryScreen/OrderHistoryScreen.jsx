import React, { useState } from 'react'
import MainTitle from '../../Components/MainTitle/MainTitle'
import { OrderHistory, Pagination, Table } from './OrderHistoryScreen.style'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getSummary } from '../../Redux/Summary/summaryAction'
import { useSelector } from 'react-redux'
import Spinner from '../../Components/Spinner/Spinner'
import { format } from "date-fns"
import { RiFileList2Fill } from 'react-icons/ri'
import Details from '../../Components/Details/Details'
import { useTranslation } from 'react-i18next'


const OrderHistoryScreen = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const { summary, loading, error } = useSelector(state => state.summary)
    const [size , setSize] = useState(5)
    const [summaryList , setSummaryList] = useState([])
    const [pagesSize , setPagesSize] = useState(0)
    const [details , setDetails] = useState(null)
    const { t } = useTranslation()

    useEffect(() => {
        summary.length === 0 && dispatch(getSummary(user.email))
        summary.length >= 1 && setSummaryList(summary.slice(0, size))
        summary.length >= 1 && setPagesSize(Math.ceil(summary.length / 5))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [summary.length])

    const handleNext = ()=>{
        setSummaryList(summary.slice(size , size + 5))
        setSize(prev => prev + 5)
    }

    const handlePrevious = ()=>{
        setSummaryList(summary.slice(size - 10 , size - 5))
        setSize(prev => prev - 5)
    }

    return (
        <OrderHistory>
            <MainTitle text={t('Order_History_List')} />
            {
                details && <Details item={details} setDetails={setDetails}/>
            }
            {
                loading ? <Spinner /> :
                    error ? <div>{error}</div> :
                        <Table>
                            <thead>
                                <tr>
                                    <th>{t('name')}</th>
                                    <th>{t('total_price')}</th>
                                    <th>{t('total_item')}</th>
                                    <th>{t('Date')}</th>
                                    <th>{t('details')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    summaryList.map(item => <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.total}</td>
                                        <td>{item.totalItem}</td>
                                        <td>{format(item.createAt.toDate().getTime(), 'dd/MM/yyyy')}</td>
                                        <td><RiFileList2Fill onClick={()=> setDetails(item)}/></td>
                                    </tr>)
                                }
                            </tbody>
                        </Table>
            }
            <Pagination>
                <span>
                    {t('Page')}{' '}
                    <strong>
                        { size / 5 } {t('of')} { pagesSize }
                    </strong>
                </span>
                <div>
                    <button onClick={handlePrevious} disabled={size === 5}>{t('Previous')}</button>
                    <button onClick={handleNext} disabled={size / 5 === pagesSize || summary.length <= 5}>{t('Next')}</button>
                </div>
            </Pagination>
        </OrderHistory>
    )
}

export default OrderHistoryScreen