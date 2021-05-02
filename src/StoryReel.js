import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className='StoryReel'>
            <Story
                image='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFhUXGBcXFxgXGBgZGBcXFRUWFxcVFxcYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAPFSsZFR0tKysrKysrKy0rLSsrKy0rLS0rLS03Ny03Ky0rNzcrKy0rNy0rLSstNys3KysrLSsrK//AABEIAIkBcAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EAEAQAAEDAQQGBwYEBAYDAAAAAAEAAhEDBBIhMQVBUWFxgRMiMpGhscEGFFJi0eFCcoLwIzOS8QcVQ3OisjRTY//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIBEBAQEAAgIDAAMAAAAAAAAAAAERAhIDIRMxQSJhcf/aAAwDAQACEQMRAD8A9UCmBShFehwMCmlVqSmGrJUCrTyoGUQvKSi6KiEqSiCooogKiCkoCiSllRFElcbS2kHUK9Mn+W8QRqkGCRvxBXYXG9rbF0lmcR2qZDxwycO7HkpyuRrhm+3aKi4/stb+loAE9ZnVO27+EnlhyXXSXZqcvVxayom6YKhRXqmtLaoKe8sal5TDs2XkZWK8hKYvZsLwoHhYgUYTqnZtvKXljUTqvZsvKBZAd6IqFTF7NYKMrKKxRNYq9TWiVFkNQ7ULxTqdmwvhIKwWYuUlOqdmsuwVDqhSXigSrmJ2GVJQlSUNGUFJQlU0yBSgqOTDVMopWhMCiIiogiCiEsqBFNKYFVplEMoCgFEDKApZUlFNKAKgRQxJRQlSUUVCAcCMDgeBzSyoXIa+e2W2PsVpcxwJglrh8TDiCN+sL39GsHtD2GWuEg+h2HcuL7U6BFpZfYAKzAbp+MfAfReI0Z7SV7NeDQMAQ5rwSJG6e0uW9b/TtZPJ9fb6qCivlLvbO1VGkmqWycAwBoHditNk9qrTGFd0iJvhrhjvI8Fv5Iz8VfTAovO6I9pQ8BtUY5X2DCdjgD4jatFX2ns4yL3nY1uWMYkxrTvKl8VjswovMP8AbNgJmi66MjebM7DsXO0r7U1X0/4TuiBbIu9YndeOXJTvCeO17Z9Zre05reJA81gtntBZqZ61UcQCR3hfOf8ANnkNvEujMu1nLPMrlWy3BwLHCNUjv5LF8l/HSeGPslht1Os29SeHjdq4haJXyzRlSqLrqVaMACCIkDIdUbl7v2d0k+q1zanbZEn4gdfFa4+TbjHPxdZrsSjKAUXRyEFGUiIK0GQlRRQFRBAFAVEJUUDSokRlAVChKkqwAqOUUKoyiqdihr8EGPyQJCw31hun4IdPOxLeGxMKg3ImD0x3I9OUodwTXkMDpim6Y7kA8ImoEXANoO5EVzuQOOsIc0Zw3Tncp7wdykqSquJ7wdynTOUBREoYgrlQVyjKGahg9KdynTHcgQpBRBFYyvF+2+hC6bTSEEfzWjWPjG/avZgKXoEyABmTEcyVLldONz6fDLS/Hq4DWrQ99MAh0TqGMjeu77X07KK1+iCQZvjKne2tGfLJedrloxkQdS5O2uvYdJ3BgTu9FrsVsEgkwSDMkYzrXAs1nqVD/DpVHbLrHHxWy06JtFANfaKRYHYMvETIEnAGclOq93StTm4hpwME45HWuTXrXYaN/LctWj9DWmuL1Fhe2Ym80CdmJXcsXsHWcR09RlNusNlzt4yieZVnFnlzeYs1ol2OI1jaf2EbTSvmWgAaxt+q+kM9jLCGxccT8V83voFydI+w75Js9QOHwVOq4cHDAq3jZ7XjzmPP+zns4+u9zPeXUg0BwDWkyDrBmAvo2hdHNszS0Oc9zovPeZJjLDIcFyPY7RloodJ0zbgdGBcCSQZnDUvSB27BdJ/jly9relO5QvO5CNikKsUekO5DpDuQKIHBEwekO1TpSlRaAUXqPS8FOm4KYKIYnS8EDVKhUlFwOmKnTHciXDaRyQvD+4QqdMdynSnYEC8bfBGUZDpzuTGtwQvj9jFQuGrxCmkxmAMZJgFWGb0DTO13cIV1pYd6W6M58VGsRNPaFARG0Ihw2pAwJgwHNA0oSFT0DZyHEZphSjLntRKskKXwq3NGvNLSZP4ie76ImL729EOSAbildTMYKtL5QKo6MgTMcvRMxk4yTyhA4VgOCQU+KjmnepRYCkqvuiSYaMycghK8f/iCy0taKtMudRulr2D8OM3zG3bqQel01a6tKg6pSZ0hAmLwAiJLp1jcvmelPairUgVSRMEAiAd8LjM0nVcBTNV5pHEsDoBnYF2qtuoVi0OaRUa2GvAHWIEXXNOQ1yDtWLLbD5Ov4w2awWm1n+DSJE9pwus/qK9Z7Jew7qT+ltQa5w7DAZaDtdOBOS5OifaK00SKbWh9IGA10zwaRiBOpdit7bFhIdZ8sy5zhB2HAwul4Y5/Nr3IeRk7DYIhcjTujKdqp9G89YSWEHJ0a9ywUvaYNa19poVaVOpiyo2KlM4TBIxB3LtWG2UqzBUpPvNO7EEZg7Cst68X7FW19ndXo1R1Q5uZAuuJuTGsZL3QrNdkQY2FeY9s7DEWhh+WoAM/hd5dy9FQtdMtY68MWg5RqSNNLXIyqmOnJNe4rSLAUyS/uRBQAu2BEE60Q7cUHHiipeRJ3DuSSoiGvKCoErlUWvOQbHOYUov6VQ1gqbm9BtPHE4bPvKC91YRmgK06xCqcxoyHj9VWWjIsJHEQg1dJhgfJDpDqWcta3JmG4p5kYCFRaKiN9VtG1ERsUZMaiBqYfZVvOwTzQut1sAPf6o1kL0Zw67hhGBHkmDD8TjxIVPvbREh/9P3RFuZrLhxafRAzqc/jeNwOHkp0cZXj+oyjTtrHdh0/pP0Vt/egAn94qOvHCD3JzWaMz3H0UbXBylBS2kdZ8PurLsa/AKwu4JSfy8iUFXRCZu4po2CE7WDOMeJ9UwPzAd6CXOSl1R1TeDwKBqs1oFNBpMmZ4kKFsaiUptTJ19xU96aDhe/e6VQxcdQPioATmE/vzdh5D7qj3wnFrXnl9SomrnMnUldTkEHEEQRtGxV+9HWHdwQNtGsOH6ZRXnNJewFkqyaYfRedbTLZ/KdS8dpT2Vtdmm8zpaXx08SN5GYX1IWxvz/0OhO20g4gukfL9VUr4pTthGIJcMjJxEbIyK61n0wxwDa7L7DhfmKjdxP4gvb6X0HZrQbxpllQiLzQMeLRgeK8lpT2LtNKXUx0jdgzg7N+5LXK+PbsGzU61AGpZKgqUj2qWYIPxU9R1YLp6N9pKDGue1pouwv0YLqbz2bzTE0zhtXiaFd7HRixzTkZHLbMre7Sgc8mozrHOIgjXKk4ys/yj6PbLdTrWZ5Y8ZAkSMAXDbq3rq2ai0NaGiIaAOC+W030yC2m6QMbgiYzJZw2L6NoLSja1IOAMthpA4YHHas7+OvG3XRxRD3bjyRLjuHEpX1WjNze8qugCdqdt44ErO23U5gPE8HecLQ2sTlHIlUI6uBOJw4oC0CJJjjCticxPFIGtBkgd32TUIKoOIe080zRP91OmZOUHX1fsmNP5j/SPVAHYau+fRIyrhMczI5qwUxtM8PsrC7eeMFBjIBcDfx2BxjyVpY/4mgcJPfkrC3egWO+IRwx75QVNpvnEzugDngmcDGUlAveMLj3bxHqU1Ouciw+CCu+Z7JHNS+4ZtMbZC1dKIxaRxhVttDT2XNPAhNFLqgjX3FGmJGH0VvSzrHr5Jb2w+KCXeXd6Kirf/CGR8ziD3Qr2s49/wB0lR5H4J4kIM5tdIYSZ2XcERaGnJh5iPRVm0kN2HY5wiNsiZSNd1ZDJn4T6qDVTdj2dXD0VzW7R4yudSrkGC187L17x2om3VJwpR+Z4GPIIOiLOyOyOUg+ChbsJ4LlG11xmWNn4RJjYSUgrv8AxVgCd7fAIOuJ2eKYVRrHivPWg1c+nYW/pBnkq7LVtd5oPXZhIa1pJB3zMqo9A+kHZkxudikZQY3Wf1OlXGwVCDDbpjDKSdkbVzXVWAEPvgjPqE8daK6TKYOT8Nx+idtnAyjn915qvaqR6rWued8tA5LQx1FpAaxznHK5IM7pQdyo13y95VRBHajkVzzVIOFCpxc8eUK2najgXU2g8Xf2RmtJP/0j98EW2wD8d7fd+yqdWccmCPzR6INe7XRxGUOB84RZGt1sYMDePAYJRpCn8UHYTd9FS2MzTII1lzfqkNd34LnC8JRW33gfF4koe9cfNZWWn47oPEn0TttFM5OBPNBpFfY76oOq/OW7xErHVt9MYQ935QPMrP8A5uT2aB4mowcsJUA0roKhaB/GJdvIbeE74Xm7X7AU87PXqD5XAOHfIK9A/SrxiWgDiXeWCalpeRN2e5qupXj2/wCHlqBltakCcMbwPcvU+yvs06xh01S8uADgMGgjIgq86ZMxcAH5mqC1l2IJOzEH1wUJHXic2z3Itoxk2OIC4Fotdq/C1247d6zXLW7Mv/rjyRXqQw6yOQCcNEZ+S8vTs9qGVSoCNrp8zB7lqa+1DC+92Hw03BB2HOxxc4DgPFBtT5jzAC5jKlpOsDeaYBC0CtV13TxaR5IN7ak6xPHFP0ZK4Nro13HFxA+QRhxiVg93q5X3RsL3SqPUVqJ2kcMClaHARjzJK862xVfjeODj9Vop2CoMqz90RO/NB2WU3YzHj6pg0jXHdC59KlWHadI3gT4Kwkg9kkbbs+qgtrvGqpj+Zvmq6NIkYvcObforQyfwngWlqFSySP5Q8T5lAzqbMi4RvIWd9KjspzvIB4p3WUHOkzi5v3StoRmKQGy4J80DU67cB1N0OBnwWu8Nh5EJA9gGHcAq+lxwA5hUWvZsMcT9lSaZ2t5epIVxq6jE7MvRV1mh2AAHJBjs9IQJpN/qJ81aNFMJJLS0DHBw4qp1orGLjA3bOePBVOoVndtrXj/cAjiIU1ME0aQktNRxO8RyK0HRwA6hPDCRPms7ekb2jTY35cTO3AY6lT75dkF9R5zltMiOG1RWm63W6odxcI45LRZtHU7s3AZx/ssjdJNeIcKkaiaZnwCZ1FzsadQ8HYAclfY6JsVJuJpA7oWmyFuJaAzYAIHgsVmqPbN+DhqyP0VVptEDqQTsvRB270HVdazOIQfUYT1gCdsLzvvVpMnqtE7HO9FYG1R2z+o4DxTR3iGDUO5Sm1kyA2R4LzraLy7F43EYhObHXHYe1w2mQor0FaDE8llrNAxEFZKYqtEEjjjmp0rwcQ0DaXZ7wIVDVau6eR7pVbnmYFOT+b6qCuDiHA8HAjuQzb2i0naMOPBENUcI7F47JVFexkY9DTaNUux8FHURk60H9MAfZY6+i6Ryfej4nTnwEoNbQ8NJeymBxI8FRfjJtLDU1xJ5ghc6pots6o3OdnxcMOSy2mwAYS6I1HwOGKmjtm3bWUo36tqNS3MI/l0ubgO6F5t9ndkCY2XpwUFEj8QG7CYPBNHe/wAzYzIUuIJInZkodJ0pBhk54EY+C4rWOIMOw4AjDI7lOhccepxjxTR6CnpGmTgaY5j1Cc6QZIlzOW/XuXnhZj8VOeZ9FuslncMTE6gTHdKaO821jXmEzaoJgrkWm0xEljTvc0jzVtM/FUa7ZAOHemq6gs9M6gnp2Sns7pXIrWxjcC9w4AEfZJU0oz/3OH6DjziFYPQCgwZT3qwU2/srg2Wu55u3ycAcYHhrVtSgRjedG9KjsljVW6zsOoSuN7uXZtJ2Q8tnmCiyg2MQ5u6+ZU0dY0hiIVZojUSFibRHwvjaHz4IPY2cb/eVVaX09V8ArO6wMJl1Qzqh3oradlbhgSdU4K33faFEVU7IAMKr+TvunbZh+J7ncSj0bcigLM3bCou90ac8UfcmjX4Kh9Jms+BRFIjsweJwQR+jHHEVCO/BVDRrh/rPO7CFeWnCW4/KSPXFXtaf2E1WEWJ+wnmU5stQDqucP6j4ra2kD9ifqnbTA1nzURmY1gyACYOG1c416owuA4TIJEd+aX3upraAOJJ8FB0rspyTrPJcSrb3jOm5w+VxB5iJXNr6TvCejqNic6mXGQg9LXrtZi4gby5YqmlgDi+nGqb2PAgrhMrdIR/Cc8nW4mOAIC1WqzPcC2nSDBrN0A95QdqppJ4gdFOOd8eAiUp0wRnSjV2258hK8qNGVTEtqPj5ry207JUBAfRJaRrAwG8qo0W/TFcyKLWN3gFzt8E5dyTRltr5vex/+4114fqAxWllnbgLmG4wQttnZAjEc8UxYzt0jWPVa1k7piDrhzQrqVathMEa5j0CvNM5h57/AEUvgYyTyJTBmtfvLh1bjAciY8Bie9YaVprMN19ZrtstxHCGrusqB2qRv84VriM7olB5+o287CqWztw4QDEImyvpgFpe+NXSYHb1YOHNdx7/AJJ5BVVKx1DwCDkvtU/gAOu+1x53m/RI19Q5XJn8Ic30zXVqWmocAO6As118zMbsCgqZQdGOJ3n1iVTVouGAbjv+ua6IBVPu+PaI4j1lQYDY349YburPmVnq6OJjqQZxMATyErtU7ORPWk8MPNaWM2hB5tthcMmtA4GfNOyyVZMkQcoaMOJnBegdSBGxILOdT+8Sg4gomYcAtVnoFoIYSOLpz2SDC3uaRm69uDcQnpFpzpkHbl6oOW6wPOphO8k+ijbDW13QN0HwJXZNNmw95UDGjIRvxQcuhYizG7TP5mjzWl1nLz/LYRsDhHcFtbRbxVjDd7MDkFVZGaKGfRjb2skp0YZwfUHAiPJb7xzveASuqPjtid4hELRsIGZc7iZ8AhVAH+m88Gn6pm1fmE8QmD3Z3j3/AEQZ30ZxFNwO+8D3JRQfsI7/AKra2sSM0rr0YFBmbQPxP4SYQLXiboHMnzVrg/b36/FVvZUzAaRvJBVglOpV1hsa4d9Qrr52DmqmV3DC4D+oYeCzuqViZaxsa8UwbW1fiAHNQV2HJwWcGR1gTubjPcqQ8zIbUA3iPMoOkHs+Md6xWvSNFhi88n5WOjvMArJWe4GAHcZA8kgquB60OGuC4/8AaMVAXaUYYutqTtLQB/2VNTSbZIJI3gE+Su97pHAMq8A0jxlVG2UyINBwGZBYI4q6Ok6gMMSOCq6FrSes4k49bGOGGS2PzHFNVWVY3Ui7XzAVFXR8nESMZ/cLpVNXBUu7J5+SIx0rJdwHVG4Ge+UTRbib1Sd4d3CRC02HVxWitqRXMFlbAIvTu+ytLsxjMYwJlWM7PctNXJvJEc50DEC6dpaRimpVCc3MP/HHcZW5qyWntFaF1Oc/ugLQ6SA1vEk+SezdkcvNW1swgx0jWOd0cB9U38TLr8ZEcME+sLSzMcEGUmrqnicfVVufVkC+GnGB1SSBnA3K205jis1f/wAin+UrItuvz6QzrJHpOCUhxgioCMscPJcPTXafxC12XtM4BWDpMYRnjtxT8W+IXOsubvznyC6dRSg9Mp0iXYrDkgUVUrrQ0Ya+B9Ai/wBQoM+aCMqE6kpqu+D/AJNTHMo0skUrXu1t9U/S7R4Jqv77klXIIjRReDq81e2iDqKyU/QJW9rktQrb7sNQRFDa3zStWK0dr97EGp9kYc2g8R9lG2ZoOAjw5KwZch5IhQC58pUFMfCrqaSpmOaBS4BL0zdvgrNiq+ipghzNQ8ExqDaqanaP72LLpHs8kG5ztmCzVr+pzuQEeKo0V/L5ro08kowFrtfeY9EOjcc7vLH0W56y2fPn6pBWaLzr8Si2yvnFwjZit4WKrmg//9k='
                profileSrc='https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
                title='Msani Thomas'
            />
            <Story
                image='https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80'
                profileSrc='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
                title='Adeke Betty'
            />
            <Story
                image='https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80'
                profileSrc='https://images.unsplash.com/photo-1529007967263-5209ef033ad3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw5ODAyMzM4fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60'
                title='Chapman Toni'
            />
            <Story
                image='https://images.unsplash.com/photo-1585816805620-468cb4d4f2e4?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw5ODAyMzM4fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
                profileSrc='https://images.unsplash.com/photo-1585331505473-7586f9cb0854?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
                title='Sabila Kaps'
            />
            <Story
                image='https://images.unsplash.com/photo-1575752244250-b1e6fc3968bd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5ODAyMzM4fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60'
                profileSrc='https://images.unsplash.com/photo-1439466654360-5e8bbd819be5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0MjAyNzR8fGVufDB8fHw%3D&auto=format&fit=crop&w=900&q=60'
                title='HollyWood Bro Chewere'
            />
        </div>
    )
}

export default StoryReel