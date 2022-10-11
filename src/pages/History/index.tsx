import { HistoryContainer, HistoryList, Status } from './styles'
export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Terefa</td>
              <td>20 min</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColor="yellow">Conclído</Status>
              </td>
            </tr>
            <tr>
              <td>Terefa</td>
              <td>20 min</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColor="red">Conclído</Status>
              </td>
            </tr>
            <tr>
              <td>Terefa</td>
              <td>20 min</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColor="yellow">Conclído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
