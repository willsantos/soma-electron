import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, cpf, childName, childCPF, value) {
  return { name, cpf, childName, childCPF, value };
}

const rows = [
  createData('Tomás Jorge Farias', '702.929.028-32', '', '', 544.0),
  createData('Mário Julio da Cruz', '287.194.378-89', 'Maitê Daniela Nogueira', '041.012.588-13', 4350.0),
  createData('Isabelle Emilly Aline Moura', '612.717.648-49', 'Jéssica Antonella Louise', '783.565.898-43', 6000),
];

const TableUsers = () =>{
  const classes = useStyles();

  return(
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Paciente</TableCell>
            <TableCell align="right">CPF Paciente</TableCell>
            <TableCell align="right">Responsável</TableCell>
            <TableCell align="right">CPF Responsável</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.cpf}</TableCell>
              <TableCell align="right">{row.childName}</TableCell>
              <TableCell align="right">{row.childCPF}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}

export default TableUsers;

//
[
	{
		"nome": "Tomás Jorge Farias",
		"idade": 18,
		"cpf": "702.929.028-32",
		"rg": "37.071.349-7",
		"data_nasc": "08\/04\/2002",
		"sexo": "Masculino",
		"signo": "Áries",
		"mae": "Beatriz Sophie Maya",
		"pai": "Marcelo Enzo Gabriel Farias",
		"email": "tomasjorgefarias_@dizain.com.br",
		"senha": "XqZFtpCCnI",
		"cep": "01246-000",
		"endereco": "Avenida Doutor Arnaldo",
		"numero": 471,
		"bairro": "Pacaembu",
		"cidade": "São Paulo",
		"estado": "SP",
		"telefone_fixo": "(11) 3821-3721",
		"celular": "(11) 99917-1803",
		"altura": "1,87",
		"peso": 83,
		"tipo_sanguineo": "AB-",
		"cor": "azul"
	},
	{
		"nome": "Mário Julio da Cruz",
		"idade": 18,
		"cpf": "287.194.378-89",
		"rg": "29.733.146-2",
		"data_nasc": "13\/11\/2002",
		"sexo": "Masculino",
		"signo": "Escorpião",
		"mae": "Melissa Raquel",
		"pai": "Rodrigo Thiago da Cruz",
		"email": "mariojuliodacruz-92@otlokk.com",
		"senha": "b4Oos80paM",
		"cep": "04542-902",
		"endereco": "Rua Leopoldo Couto de Magalhães Júnior 610",
		"numero": 250,
		"bairro": "Vila Nova Conceição",
		"cidade": "São Paulo",
		"estado": "SP",
		"telefone_fixo": "(11) 2698-2944",
		"celular": "(11) 98768-4424",
		"altura": "2,00",
		"peso": 109,
		"tipo_sanguineo": "AB+",
		"cor": "vermelho"
	},
	{
		"nome": "Bento Geraldo Benjamin Nunes",
		"idade": 18,
		"cpf": "935.112.068-63",
		"rg": "37.234.084-2",
		"data_nasc": "22\/01\/2002",
		"sexo": "Masculino",
		"signo": "Aquário",
		"mae": "Aline Isabelle",
		"pai": "Murilo Pietro Nunes",
		"email": "bentogeraldobenjaminnunes_@brasfrutmanaus.com.br",
		"senha": "nsiiEHqLUs",
		"cep": "05521-201",
		"endereco": "Travessa Irmã Dolores Baldi",
		"numero": 205,
		"bairro": "Vila Sônia",
		"cidade": "São Paulo",
		"estado": "SP",
		"telefone_fixo": "(11) 2678-2657",
		"celular": "(11) 99967-5684",
		"altura": "1,96",
		"peso": 109,
		"tipo_sanguineo": "O-",
		"cor": "vermelho"
	}
]

[
	{
		"nome": "Maitê Daniela Nogueira",
		"idade": 18,
		"cpf": "041.012.588-13",
		"rg": "34.833.517-9",
		"data_nasc": "20\/09\/2002",
		"sexo": "Feminino",
		"signo": "Virgem",
		"mae": "Clarice Bruna Vanessa",
		"pai": "Geraldo Kaique Nogueira",
		"email": "maitedanielanogueira-72@tjam.jus.br",
		"senha": "wbixjyUYF4",
		"cep": "03630-200",
		"endereco": "Praça Padre Juan Carlo Guardiola",
		"numero": 149,
		"bairro": "Guaiaúna",
		"cidade": "São Paulo",
		"estado": "SP",
		"telefone_fixo": "(11) 3698-8078",
		"celular": "(11) 99722-2703",
		"altura": "1,66",
		"peso": 69,
		"tipo_sanguineo": "B+",
		"cor": "amarelo"
	},
	{
		"nome": "Catarina Maria Pietra Silveira",
		"idade": 18,
		"cpf": "783.565.898-43",
		"rg": "22.836.290-8",
		"data_nasc": "20\/07\/2002",
		"sexo": "Feminino",
		"signo": "Câncer",
		"mae": "Flávia Elisa Fernanda",
		"pai": "Thiago Renato Silveira",
		"email": "catarinamariapietrasilveira..catarinamariapietrasilveira@slb.com.br",
		"senha": "1RSmKnJyO7",
		"cep": "05138-900",
		"endereco": "Rua Eugênio Daneri 50",
		"numero": 158,
		"bairro": "Jardim Líbano",
		"cidade": "São Paulo",
		"estado": "SP",
		"telefone_fixo": "(11) 2988-6227",
		"celular": "(11) 98948-2118",
		"altura": "1,55",
		"peso": 75,
		"tipo_sanguineo": "A+",
		"cor": "preto"
	},
	{
		"nome": "Isabelle Emilly Aline Moura",
		"idade": 18,
		"cpf": "612.717.648-49",
		"rg": "47.793.249-6",
		"data_nasc": "02\/01\/2002",
		"sexo": "Feminino",
		"signo": "Capricórnio",
		"mae": "Jéssica Antonella Louise",
		"pai": "Ricardo Noah Moura",
		"email": "isabelleemillyalinemoura..isabelleemillyalinemoura@destaco.com",
		"senha": "BSLqdcdnJG",
		"cep": "04077-911",
		"endereco": "Avenida Moema 728",
		"numero": 790,
		"bairro": "Planalto Paulista",
		"cidade": "São Paulo",
		"estado": "SP",
		"telefone_fixo": "(11) 2732-1504",
		"celular": "(11) 98892-8536",
		"altura": "1,83",
		"peso": 66,
		"tipo_sanguineo": "B+",
		"cor": "vermelho"
	}
]
