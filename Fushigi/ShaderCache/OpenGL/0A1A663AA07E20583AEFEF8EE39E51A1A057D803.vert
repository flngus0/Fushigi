#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    int temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    int temp_8;
    uint temp_9;
    uint temp_10;
    int temp_11;
    precise float temp_12;
    int temp_13;
    uint temp_14;
    uint temp_15;
    int temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    int temp_20;
    uint temp_21;
    uint temp_22;
    int temp_23;
    precise float temp_24;
    int temp_25;
    uint temp_26;
    int temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    int temp_31;
    uint temp_32;
    uint temp_33;
    int temp_34;
    precise float temp_35;
    int temp_36;
    uint temp_37;
    int temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400270010 Mov
    // 0x000010: 0xEFD87F800807FF0C Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4CB0119002371A00 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0x4C98079400370014 Mov
    // 0x000030: 0xEFD87F800847FF11 Ald
    temp_3 = in_attr0.y;
    // 0x000038: 0x3848000000470008 Shl
    temp_4 = temp_2 << 4;
    // 0x000048: 0xEFD87F800887FF13 Ald
    temp_5 = in_attr0.z;
    // 0x000050: 0x4C68101000870C06 Fmul
    temp_6 = temp_0 * vp_c4.data[2].x;
    // 0x000058: 0xEFD87F800907FF12 Ald
    temp_7 = in_attr1.x;
    // 0x000068: 0xEF94007048870804 Ldc
    temp_8 = temp_4 + 0x488;
    temp_9 = uint(temp_8) >> 2;
    temp_10 = temp_9 >> 2;
    temp_11 = int(temp_9) & 3;
    temp_12 = vp_c7.data[int(temp_10)][temp_11];
    // 0x000070: 0xEF9400706887080A Ldc
    temp_13 = temp_4 + 0x688;
    temp_14 = uint(temp_13) >> 2;
    temp_15 = temp_14 >> 2;
    temp_16 = int(temp_14) & 3;
    temp_17 = vp_c7.data[int(temp_15)][temp_16];
    // 0x000078: 0x4C68101000470C07 Fmul
    temp_18 = temp_0 * vp_c4.data[1].x;
    // 0x000088: 0xEFD87F801047FF0F Ald
    temp_19 = in_attr8.y;
    // 0x000090: 0xEF95007048070800 Ldc
    temp_20 = temp_4 + 0x480;
    temp_21 = uint(temp_20) >> 2;
    temp_22 = temp_21 >> 2;
    temp_23 = int(temp_21) & 3;
    temp_24 = vp_c7.data[int(temp_22)][temp_23];
    temp_25 = int(temp_21) + 1;
    temp_26 = uint(temp_25) >> 2;
    temp_27 = temp_25 & 3;
    temp_28 = vp_c7.data[int(temp_26)][temp_27];
    // 0x000098: 0x49A003100097110E Ffma
    temp_29 = fma(temp_3, vp_c4.data[2].y, temp_6);
    // 0x0000A8: 0xEFD87F800947FF05 Ald
    temp_30 = in_attr1.y;
    // 0x0000B0: 0xEF95007068070802 Ldc
    temp_31 = temp_4 + 0x680;
    temp_32 = uint(temp_31) >> 2;
    temp_33 = temp_32 >> 2;
    temp_34 = int(temp_32) & 3;
    temp_35 = vp_c7.data[int(temp_33)][temp_34];
    temp_36 = int(temp_32) + 1;
    temp_37 = uint(temp_36) >> 2;
    temp_38 = temp_36 & 3;
    temp_39 = vp_c7.data[int(temp_37)][temp_38];
    // 0x0000B8: 0x4C68101000070C0C Fmul
    temp_40 = temp_0 * vp_c4.data[0].x;
    // 0x0000C8: 0xEFD87F800987FF09 Ald
    temp_41 = in_attr1.z;
    // 0x0000D0: 0x49A003900057110D Ffma
    temp_42 = fma(temp_3, vp_c4.data[1].y, temp_18);
    // 0x0000D8: 0xEFD87F801007FF06 Ald
    temp_43 = in_attr8.x;
    // 0x0000E8: 0x49A0071000A7130E Ffma
    temp_44 = fma(temp_5, vp_c4.data[2].z, temp_29);
    // 0x0000F0: 0x49A006100017110C Ffma
    temp_45 = fma(temp_3, vp_c4.data[0].y, temp_40);
    // 0x0000F8: 0x49A006900067130D Ffma
    temp_46 = fma(temp_5, vp_c4.data[1].z, temp_42);
    // 0x000108: 0x4C68101000071208 Fmul
    temp_47 = temp_7 * vp_c4.data[0].x;
    // 0x000110: 0x49A006100027130C Ffma
    temp_48 = fma(temp_5, vp_c4.data[0].z, temp_45);
    // 0x000118: 0x51A0081400470F0B Ffma
    temp_49 = fma(temp_19, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000128: 0x51A00A1400570F07 Ffma
    temp_50 = fma(temp_19, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000130: 0x4C68101000471210 Fmul
    temp_51 = temp_7 * vp_c4.data[1].x;
    // 0x000138: 0x4C58101000B70E0F Fadd
    temp_52 = temp_44 + vp_c4.data[2].w;
    // 0x000148: 0x4C68101000871212 Fmul
    temp_53 = temp_7 * vp_c4.data[2].x;
    // 0x000150: 0x49A004100017050E Ffma
    temp_54 = fma(temp_30, vp_c4.data[0].y, temp_47);
    // 0x000158: 0x4C58101000770D08 Fadd
    temp_55 = temp_46 + vp_c4.data[1].w;
    // 0x000168: 0x4C58101000370C0D Fadd
    temp_56 = temp_48 + vp_c4.data[0].w;
    // 0x000170: 0x49A0081000570510 Ffma
    temp_57 = fma(temp_30, vp_c4.data[1].y, temp_51);
    // 0x000178: 0x59A0050000470F04 Ffma
    temp_58 = fma(temp_52, temp_12, temp_17);
    // 0x000188: 0x49A0091000970512 Ffma
    temp_59 = fma(temp_30, vp_c4.data[2].y, temp_53);
    // 0x000190: 0x49A0071000270905 Ffma
    temp_60 = fma(temp_41, vp_c4.data[0].z, temp_54);
    // 0x000198: 0x59A0018000170808 Ffma
    temp_61 = fma(temp_55, temp_28, temp_39);
    // 0x0001A8: 0x59A0010000070D0D Ffma
    temp_62 = fma(temp_56, temp_24, temp_35);
    // 0x0001B0: 0x49A0081000670901 Ffma
    temp_63 = fma(temp_41, vp_c4.data[1].z, temp_57);
    // 0x0001B8: 0x4C5810180BA7040C Fadd
    temp_64 = temp_58 + vp_c6.data[46].z;
    // 0x0001C8: 0x49A0059400070613 Ffma
    temp_65 = fma(temp_43, vp_c5.data[0].x, temp_49);
    // 0x0001D0: 0x5C68100000570502 Fmul
    temp_66 = temp_60 * temp_60;
    // 0x0001D8: 0xEFF07F800B07FF13 Ast
    out_attr3.x = temp_65;
    // 0x0001E8: 0x4C6810180C670C0B Fmul
    temp_67 = temp_64 * vp_c6.data[49].z;
    // 0x0001F0: 0x4C6810180C270C00 Fmul
    temp_68 = temp_64 * vp_c6.data[48].z;
    // 0x0001F8: 0x4C5810180B97080A Fadd
    temp_69 = temp_61 + vp_c6.data[46].y;
    // 0x000208: 0x4C6810180CA70C0C Fmul
    temp_70 = temp_64 * vp_c6.data[50].z;
    // 0x000210: 0x49A0091000A70903 Ffma
    temp_71 = fma(temp_41, vp_c4.data[2].z, temp_59);
    // 0x000218: 0x59A001000017010E Ffma
    temp_72 = fma(temp_63, temp_63, temp_66);
    // 0x000228: 0x4C68100C00070D09 Fmul
    temp_73 = temp_62 * vp_c3.data[0].x;
    // 0x000230: 0x49A0039400170615 Ffma
    temp_74 = fma(temp_43, vp_c5.data[0].y, temp_50);
    // 0x000238: 0x49A005980C570A02 Ffma
    temp_75 = fma(temp_69, vp_c6.data[49].y, temp_67);
    // 0x000248: 0xEFF07F800B47FF15 Ast
    out_attr3.y = temp_74;
    // 0x000250: 0x49A000180C170A00 Ffma
    temp_76 = fma(temp_69, vp_c6.data[48].y, temp_68);
    // 0x000258: 0x49A006180C970A06 Ffma
    temp_77 = fma(temp_69, vp_c6.data[50].y, temp_70);
    // 0x000268: 0x59A007000037030A Ffma
    temp_78 = fma(temp_71, temp_71, temp_72);
    // 0x000270: 0x49A0048C0017080E Ffma
    temp_79 = fma(temp_61, vp_c3.data[0].y, temp_73);
    // 0x000278: 0x5080000000570A0A Mufu
    temp_80 = inversesqrt(temp_78);
    // 0x000288: 0x4C68100C00470D0F Fmul
    temp_81 = temp_62 * vp_c3.data[1].x;
    // 0x000290: 0x4C58101002070409 Fadd
    temp_82 = temp_58 + vp_c4.data[8].x;
    // 0x000298: 0x4C68100C00870D0B Fmul
    temp_83 = temp_62 * vp_c3.data[2].x;
    // 0x0002A8: 0x4C5830180B070D10 Fadd
    temp_84 = 0.0 - vp_c6.data[44].x;
    temp_85 = temp_62 + temp_84;
    // 0x0002B0: 0x4C5810180B870D07 Fadd
    temp_86 = temp_62 + vp_c6.data[46].x;
    // 0x0002B8: 0x49A0070C0027040C Ffma
    temp_87 = fma(temp_58, vp_c3.data[0].z, temp_79);
    // 0x0002C8: 0x49A0078C0057080F Ffma
    temp_88 = fma(temp_61, vp_c3.data[1].y, temp_81);
    // 0x0002D0: 0x49A0070C0027090E Ffma
    temp_89 = fma(temp_82, vp_c3.data[0].z, temp_79);
    // 0x0002D8: 0x49A0058C0097080B Ffma
    temp_90 = fma(temp_61, vp_c3.data[2].y, temp_83);
    // 0x0002E8: 0x4C5830180B170811 Fadd
    temp_91 = 0.0 - vp_c6.data[44].y;
    temp_92 = temp_61 + temp_91;
    // 0x0002F0: 0x4C58300C03370813 Fadd
    temp_93 = 0.0 - vp_c3.data[12].w;
    temp_94 = temp_61 + temp_93;
    // 0x0002F8: 0x4C68101803871010 Fmul
    temp_95 = temp_85 * vp_c6.data[14].x;
    // 0x000308: 0xEFF07F800947FF13 Ast
    out_attr1.y = temp_94;
    // 0x000310: 0x4C58300C02F70D12 Fadd
    temp_96 = 0.0 - vp_c3.data[11].w;
    temp_97 = temp_62 + temp_96;
    // 0x000318: 0x49A0078C00670908 Ffma
    temp_98 = fma(temp_82, vp_c3.data[1].z, temp_88);
    // 0x000328: 0xEFF07F800907FF12 Ast
    out_attr1.x = temp_97;
    // 0x000330: 0x4C58100C00370E0E Fadd
    temp_99 = temp_89 + vp_c3.data[0].w;
    // 0x000338: 0x49A0078C0067040D Ffma
    temp_100 = fma(temp_58, vp_c3.data[1].z, temp_88);
    // 0x000348: 0x5C68100000A70101 Fmul
    temp_101 = temp_63 * temp_80;
    // 0x000350: 0x5C68100000A7050F Fmul
    temp_102 = temp_60 * temp_80;
    // 0x000358: 0xEFF07F800847FF01 Ast
    out_attr0.y = temp_101;
    // 0x000368: 0x49A0058C00A70905 Ffma
    temp_103 = fma(temp_82, vp_c3.data[2].z, temp_90);
    // 0x000370: 0xEFF07F800807FF0F Ast
    out_attr0.x = temp_102;
    // 0x000378: 0x4C58300C03770414 Fadd
    temp_104 = 0.0 - vp_c3.data[13].w;
    temp_105 = temp_58 + temp_104;
    // 0x000388: 0x49A0058C00A7040B Ffma
    temp_106 = fma(temp_58, vp_c3.data[2].z, temp_90);
    // 0x000390: 0xEFF07F800987FF14 Ast
    out_attr1.z = temp_105;
    // 0x000398: 0x49A0081803971111 Ffma
    temp_107 = fma(temp_92, vp_c6.data[14].y, temp_95);
    // 0x0003A8: 0x4C5830180B270404 Fadd
    temp_108 = 0.0 - vp_c6.data[44].z;
    temp_109 = temp_58 + temp_108;
    // 0x0003B0: 0x49A000180C070700 Ffma
    temp_110 = fma(temp_86, vp_c6.data[48].x, temp_76);
    // 0x0003B8: 0x5C68100000A70303 Fmul
    temp_111 = temp_71 * temp_80;
    // 0x0003C8: 0x49A001180C470702 Ffma
    temp_112 = fma(temp_86, vp_c6.data[49].x, temp_75);
    // 0x0003D0: 0xEFF07F800887FF03 Ast
    out_attr0.z = temp_111;
    // 0x0003D8: 0x4C58100C00770808 Fadd
    temp_113 = temp_98 + vp_c3.data[1].w;
    // 0x0003E8: 0x4C68100C02470E01 Fmul
    temp_114 = temp_99 * vp_c3.data[9].x;
    // 0x0003F0: 0x4C58100C00370C0C Fadd
    temp_115 = temp_87 + vp_c3.data[0].w;
    // 0x0003F8: 0x49A0089803A70411 Ffma
    temp_116 = fma(temp_109, vp_c6.data[14].z, temp_107);
    // 0x000408: 0x4C58100C00770D0D Fadd
    temp_117 = temp_100 + vp_c3.data[1].w;
    // 0x000410: 0x4C6810180BB70204 Fmul
    temp_118 = temp_112 * vp_c6.data[46].w;
    // 0x000418: 0x4C68100C01C70E02 Fmul
    temp_119 = temp_99 * vp_c3.data[7].x;
    // 0x000428: 0xEFF07F800D47FF04 Ast
    out_attr5.y = temp_118;
    // 0x000430: 0x4C6810180BB70003 Fmul
    temp_120 = temp_110 * vp_c6.data[46].w;
    // 0x000438: 0x49A0008C02570800 Ffma
    temp_121 = fma(temp_113, vp_c3.data[9].y, temp_114);
    // 0x000448: 0xEFF07F800D07FF03 Ast
    out_attr5.x = temp_120;
    // 0x000450: 0x4C68100C02870E01 Fmul
    temp_122 = temp_99 * vp_c3.data[10].x;
    // 0x000458: 0x4C68101802C70C0C Fmul
    temp_123 = temp_115 * vp_c6.data[11].x;
    // 0x000468: 0x4C68100C02070E0E Fmul
    temp_124 = temp_99 * vp_c3.data[8].x;
    // 0x000470: 0x4C58100C00B70B0B Fadd
    temp_125 = temp_106 + vp_c3.data[2].w;
    // 0x000478: 0x4C58100C00B70505 Fadd
    temp_126 = temp_103 + vp_c3.data[2].w;
    // 0x000488: 0xEFF07F800A87FF0B Ast
    out_attr2.z = temp_125;
    // 0x000490: 0x49A0061802D70D0C Ffma
    temp_127 = fma(temp_117, vp_c6.data[11].y, temp_123);
    // 0x000498: 0x49A0010C01D70802 Ffma
    temp_128 = fma(temp_113, vp_c3.data[7].y, temp_119);
    // 0x0004A8: 0x49A0008C02970803 Ffma
    temp_129 = fma(temp_113, vp_c3.data[10].y, temp_122);
    // 0x0004B0: 0x49A0070C0217080E Ffma
    temp_130 = fma(temp_113, vp_c3.data[8].y, temp_124);
    // 0x0004B8: 0x49A003180C870706 Ffma
    temp_131 = fma(temp_86, vp_c6.data[50].x, temp_77);
    // 0x0004C8: 0x4C98079803C7000A Mov
    // 0x0004D0: 0x49A0061802E70B0C Ffma
    temp_132 = fma(temp_125, vp_c6.data[11].z, temp_127);
    // 0x0004D8: 0x4C98079803070007 Mov
    // 0x0004E8: 0x49A0000C02670500 Ffma
    temp_133 = fma(temp_126, vp_c3.data[9].z, temp_121);
    // 0x0004F0: 0x49A0010C01E70502 Ffma
    temp_134 = fma(temp_126, vp_c3.data[7].z, temp_128);
    // 0x0004F8: 0x49A0018C02A70503 Ffma
    temp_135 = fma(temp_126, vp_c3.data[10].z, temp_129);
    // 0x000508: 0x49A0070C0227050E Ffma
    temp_136 = fma(temp_126, vp_c3.data[8].z, temp_130);
    // 0x000510: 0x4C6810180BB70606 Fmul
    temp_137 = temp_131 * vp_c6.data[46].w;
    // 0x000518: 0x51A0051803B71111 Ffma
    temp_138 = fma(temp_116, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000528: 0xEFF07F800D87FF06 Ast
    out_attr5.z = temp_137;
    // 0x000530: 0x51A0039802F70C0C Ffma
    temp_139 = fma(temp_132, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000538: 0xEFF07F800C47FF11 Ast
    out_attr4.y = temp_138;
    // 0x000548: 0x4C58100C02770000 Fadd
    temp_140 = temp_133 + vp_c3.data[9].w;
    // 0x000550: 0xEFF07F800C07FF0C Ast
    out_attr4.x = temp_139;
    // 0x000558: 0x4C58100C01F70202 Fadd
    temp_141 = temp_134 + vp_c3.data[7].w;
    // 0x000568: 0xEFF07F800787FF00 Ast
    gl_Position.z = temp_140;
    // 0x000570: 0x4C58100C02B70303 Fadd
    temp_142 = temp_135 + vp_c3.data[10].w;
    // 0x000578: 0xEFF07F800707FF02 Ast
    gl_Position.x = temp_141;
    // 0x000588: 0x4C58100C02370E0E Fadd
    temp_143 = temp_136 + vp_c3.data[8].w;
    // 0x000590: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_142;
    // 0x000598: 0xEFF07F800747FF0E Ast
    gl_Position.y = temp_143;
    // 0x0005A8: 0xE30000000007000F Exit
    return;
}
