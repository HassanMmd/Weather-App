import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function WeatherScreen() {
    const [search, setSearch] = useState('')
    const [searchCities, setSearchCities] = useState([])
    const [city, setCity] = useState('Damascus')
    const [temp, setTemp] = useState('')
    const [description, setDescription] = useState('')
    const [hum, setHum] = useState('')
    const [wind, setWind] = useState('')
    const [IconUrl, setIconUrl] = useState('')
    const [cityForcast, setCityForcast] = useState('Damascus')
    const [lastupdateForcast, setlastupdateForcast] = useState('')
    const [tempForcast, setTempForcast] = useState('')
    const [descriptionForcast, setDescriptionForcast] = useState('')
    const [humForcast, setHumForcast] = useState('')
    const [windForcast, setWindForcast] = useState('')
    const [IconUrlForcast, setIconUrlForcast] = useState('')
    const [date, setDate] = useState('')
    const [weatherInfo, setWeatherInfo] = useState([])
    const [weatherSuggestionInfo, setWeatherSuggestionInfo] = useState([])
    const [forcastInfo, setForcastInfo] = useState([])
    const [forcastDaysInfo, setForcastDaysInfo] = useState([])
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState('')

    const fetchWeatherData = async () => {
        setLoading('Loading...')
        await fetch(`http://api.weatherapi.com/v1/current.json?key=9ddefad68dcc464ca0682600240412&q=${city}&aqi=no`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "charset": "utf-8"
                },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw Error('Could not fetch the data')
                    setLoading('There is no city with this name')
                }
                else if (response.ok) {
                    return response.json()
                }
            })
            .then((data) => {
                if (data) {
                    setLoading('Done')
                    setMessage('Done')
                    setCity(data.location.name)
                    setTemp(data.current.temp_c)
                    setDescription(data.current.condition.text)
                    setIconUrl(data.current.condition.icon)
                    setHum(data.current.humidity)
                    setWind(data.current.wind_kph)
                }
                return setWeatherInfo(data)

            })
            .catch(err => {
                setMessage(err)
            })
    };

    const fetchForcastData = async () => {
        setLoading('Loading...')
        await fetch(`http://api.weatherapi.com/v1/forecast.json?key=9ddefad68dcc464ca0682600240412&q=${city}&days=4&aqi=no&alerts=no`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "charset": "utf-8"
                },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw Error('Could not fetch the data')
                    setLoading('There is no city with this name')
                }
                else if (response.ok) {
                    return response.json()
                }
            })
            .then((data) => {
                if (data) {
                    setLoading('Done')
                    setMessage('Done')
                    setForcastDaysInfo(data.forecast.forecastday)
                    setCityForcast(data.location.name)
                    setlastupdateForcast(data.current.last_updated)
                    setTempForcast(data.current.temp_c)
                    setDescriptionForcast(data.current.condition.text)
                    setIconUrlForcast(data.current.condition.icon)
                    setHumForcast(data.current.humidity)
                    setWindForcast(data.current.wind_kph)
                }
                return setForcastInfo(data)

            })
            .catch(err => {
                setMessage(err)
            })
    };
    const fetchSearchForcastData = async (city) => {
        setLoading('Loading...')
        await fetch(`http://api.weatherapi.com/v1/forecast.json?key=9ddefad68dcc464ca0682600240412&q=${city}&days=4&aqi=no&alerts=no`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "charset": "utf-8"
                },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw Error('Could not fetch the data')
                    setLoading('There is no city with this name')
                }
                else if (response.ok) {
                    return response.json()
                }
            })
            .then((data) => {
                if (data) {
                    setLoading('Done')
                    setMessage('Done')
                    setForcastDaysInfo(data.forecast.forecastday)
                    setCityForcast(data.location.name)
                    setlastupdateForcast(data.current.last_updated)
                    setTempForcast(data.current.temp_c)
                    setDescriptionForcast(data.current.condition.text)
                    setIconUrlForcast(data.current.condition.icon)
                    setHumForcast(data.current.humidity)
                    setWindForcast(data.current.wind_kph)
                }
                return setForcastInfo(data)

            })
            .catch(err => {
                setMessage(err)
            })
    };
    const fetchSearchWeatherData = async (city) => {
        setLoading('Loading...')
        await fetch(`http://api.weatherapi.com/v1/current.json?key=9ddefad68dcc464ca0682600240412&q=${city}&aqi=no`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "charset": "utf-8"
                },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    setMessage('There is no city with this name')
                    setLoading('There is no city with this name')
                    throw Error('Could not fetch the data')

                }
                else if (response.ok) {
                    return response.json()
                }
            })
            .then((data) => {
                if (data) {
                    setLoading('Done')
                    setMessage('Done')
                    setCity(data.location.name)
                    setTemp(data.current.temp_c)
                    setDescription(data.current.condition.text)
                    setIconUrl(data.current.condition.icon)
                    setHum(data.current.humidity)
                    setWind(data.current.wind_kph)
                }
                return setWeatherInfo(data)
            })
            .catch(err => {
                setMessage(err)
            })
        setSearch('')
    };
    const fetchWeatherDataSugesstion = async (search) => {
        setLoading('Loading...')
        await fetch(`http://api.weatherapi.com/v1/search.json?key=9ddefad68dcc464ca0682600240412&q=${search}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "charset": "utf-8"
                },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw Error('Could not fetch the data')
                }
                else if (response.ok) {
                    return response.json()
                }
            })
            .then((data) => {
                if (data) {
                    setLoading('Done')
                    setMessage('Done')
                    setSearchCities(data)
                }
                return setWeatherSuggestionInfo(data)

            })
            .catch(err => {
                setMessage(err)
            })
    };
    const getSearch = (search) => {
        if (search) {
            fetchSearchWeatherData(search)
            fetchSearchForcastData(search)
        } else {
            setMessage('Please add city name')
        }
        setSearch('')
    }
    const handleSearchChange = (e) => {
        setSearch(e);
        fetchWeatherDataSugesstion(e)
    }
    useEffect(() => {
        fetchWeatherData()
        fetchForcastData()
    }, [])
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleSearch}>City Search:</Text>
                {message !== 'Done' && <Text style={styles.message}>Please check the name of the city</Text>}
                <View style={styles.search}>
                    <TextInput style={styles.searchInputText} placeholder='Search' value={search} onChangeText={handleSearchChange}></TextInput>
                    <TouchableOpacity onPress={() => getSearch(search)}>
                        <View style={styles.searchBtn}>
                            <Text>Search</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.titleScroll}>Scroll left and right to see more suggestions:</Text>
                    <ScrollView horizontal={true}>
                        {searchCities.map((e) => {
                            return (
                                <View style={styles.searchStg}>
                                    <TouchableOpacity onPress={() => getSearch(e.name)}>
                                        <Text style={styles.titleSearch} key={e.id}>{e.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
                {loading !== 'Done' && loading !== 'There is no city with this name' && forcastDaysInfo.length !== 0 && <Text style={styles.title}>Loading...</Text>}
                {message !== 'Done' && <Text style={styles.title}>No Items</Text>}
            </View>
            {message === 'Done' &&
                <View style={styles.weatherForcast}>
                    <View>
                        <Text style={styles.title}>Today:</Text>
                        <View style={styles.weatherSection}>
                            <View style={styles.weatherInfo}>
                                <Text style={styles.city}>{city}</Text>
                                <Text style={styles.temp}>{temp} ْC</Text>
                                <Image style={styles.img} source={{ uri: `https:${IconUrl}` }}></Image>
                                <Text style={styles.desc}>{description}</Text>
                                <Text style={styles.humWin}>Humidity: {hum} - Wind Speed : {wind} KPH</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.title}>Today and Next 3 Days:</Text>
                        <Text style={styles.titleScroll}>Scroll left and right for more:</Text>
                        <View style={styles.forcast}>
                            <ScrollView horizontal={true}>
                                {forcastDaysInfo.map((e) => {
                                    return (
                                        <View key={e.date_epoch} style={styles.forcastSection}>
                                            <View style={styles.forcastInfo}>
                                                <Text style={styles.humWinforcast}>{e.date}</Text>
                                                <Text style={styles.tempforcast}>{e.day.maxtemp_c} / {e.day.mintemp_c} ْC</Text>
                                                <Image style={styles.imgforcast} source={{ uri: `https:${e.day.condition.icon}` }}></Image>
                                                <Text style={styles.descforcast}>{e.day.condition.text}</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </ScrollView>
                        </View>
                    </View>
                </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginTop: 10,
        width: '100%',
    },
    searchInputText: {
        minWidth: 300,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'gray',
        borderRadius: 8,
        backgroundColor: 'white',
    },
    searchBtn: {
        backgroundColor: '#bdc2d9',
        padding: 10,
        borderRadius: 8,
    },
    searchStg: {
        padding: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    message: {
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'red'
    },
    titleSearch: {
        fontSize: 14,
        color: '#fff'
    },
    titleScroll: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#fff'
    },
    weatherForcast: {
        marginBottom: 20
    },
    weatherSection: {
        backgroundColor: '#8d89cc',
        padding: 80,
        marginTop: 10,
        borderRadius: 4,
        margin: 6
    },
    weatherInfo: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    forcast: {
        flexDirection: 'row',
    },
    forcastSection: {
        padding: 30,
    },
    forcastInfo: {
        alignItems: 'center',
    },
    city: {
        fontSize: 26,
        fontStyle: 'italic',
        color: '#dad8f0',
    },
    temp: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#dad8f0',
    },
    desc: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#dad8f0',
    },
    img: {
        width: 80,
        height: 80,
    },
    humWin: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#dad8f0',
    },
    update: {
        fontSize: 8,
        fontStyle: 'italic',
        color: '#dad8f0',
    },
    tempforcast: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#dad8f0',
    },
    descforcast: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#dad8f0',
    },
    imgforcast: {
        width: 80,
        height: 80,
    },
    humWinforcast: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#dad8f0',
    },
    updateforcast: {
        fontSize: 8,
        fontStyle: 'italic',
        color: '#dad8f0',
    },
})